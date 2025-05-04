import { useState } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const { signIn, forgotPassword, loading } = useAuth();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPassword = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await forgotPassword(email);
      setErrorMessage('Please check your email for password reset link!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/missing-email).') {
          setErrorMessage(
            'Please fill out the email so we can send you a password reset link!'
          );
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage('Something went wrong.');
      }
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn(email, password);

      // 3. Get the Firebase ID token
      const idToken = await getAuth().currentUser?.getIdToken(true);

      if (!idToken) {
        console.log(`${idToken} not found`);
        throw new Error('Failed to retrieve ID token');
      }

      // 4. Send the ID token to the backend API for user creation
      const response = await axios.post(backendBaseUrl + '/api/auth/signin', {
        idToken,
      });

      // 5. Handle response from your API
      if (response.status === 201) {
        window.location.href = '/dashboard'; // Redirect after successful signup
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMessage('Please provide a valid email address!');
        } else if (
          error.message === 'Firebase: Error (auth/missing-password).'
        ) {
          setErrorMessage('Please fill out your password!');
        } else if (
          error.message === 'Firebase: Error (auth/invalid-credential).'
        ) {
          setErrorMessage('Wrong email or password!');
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage('Something went wrong.');
      }
    }
  };

  return (
    <section id="signin" className="max-w-md mx-auto px-6 py-20">
      <div className="bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center">Sign In</h3>
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            disabled={loading}
          />

          <div className="relative">
            <input
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              disabled={loading}
            />
            <span>
              <FontAwesomeIcon
                icon={visible ? 'eye-slash' : 'eye'}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            </span>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <div className="justify-between gap-4">
            <button
              onClick={handleSignIn}
              className="w-full rounded-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400 transition cursor-pointer flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white/50" />
                  <span className="text-white/90">Signing you in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
            <button
              onClick={handleForgotPassword}
              className="mt-3 text-sm font-semibold text-indigo-600 hover:underline hover:text-indigo-800 transition cursor-pointer"
              type="button"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-white/50" />
              ) : (
                'Forgot Password?'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
