import { useEffect, useState } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const { signUp, loading } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayNameText, setDisplayNameText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    if (authenticated) {
      window.location.href = '/preference';
    }
  }, [authenticated]);

  // Purpose: check for email verification and send token
  const startVerificationPolling = () => {
    if (polling) return;
    setPolling(true);

    const interval = setInterval(async () => {
      const currentUser = getAuth().currentUser;
      if (!currentUser) return;

      await currentUser.reload(); // refreshes auth info

      if (currentUser.emailVerified) {
        clearInterval(interval);
        setPolling(false);

        try {
          const idToken = await currentUser.getIdToken(true);

          const response = await axios.post(
            backendBaseUrl + '/api/auth/signup',
            { idToken }
          );

          if (response.status === 201) {
            setAuthenticated(true);
          } else {
            setErrorMessage('Could not complete signup with backend.');
          }
        } catch (err) {
          console.error(err);
          setErrorMessage(
            'Something went wrong communicating with the server.'
          );
        }
      }
    }, 3000); // check every 3 seconds
  };

  // Handling clicking Sign Up button
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      await signUp(email, password, displayNameText).then(() =>
        setErrorMessage(
          'Please verify your account by following the instructions emailed to you!'
        )
      );

      startVerificationPolling();
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMessage('Please provide a valid email address!');
        } else if (
          error.message === 'Firebase: Error (auth/missing-password).'
        ) {
          setErrorMessage('Please fill out your password!');
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage(
          'Cannot create your account right now. Please try again other time.'
        );
      }
    }
  };

  return (
    <section id="signup" className="max-w-md mx-auto px-6 py-20">
      <div className="bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center">Sign Up</h3>
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            disabled={loading}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            disabled={loading}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            disabled={loading}
          />
          <input
            type="text"
            value={displayNameText ? displayNameText : ''}
            onChange={(e) => setDisplayNameText(e.target.value)}
            placeholder="Display Name"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            disabled={loading}
          />
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <button
            onClick={handleSignUp}
            className="w-full rounded-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400 transition cursor-pointer flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white/50" />
                <span className="text-white/90">Creating your account...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
