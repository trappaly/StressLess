import { useState } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';
import { updateProfile } from 'firebase/auth';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const { signUp, user, loading } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      await signUp(email, password);

      // Update the user's display name
      await updateProfile(user!, {
        displayName: displayName,
      });

      window.location.href = '/preference';
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;

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
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Display Name"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <button
            onClick={handleSignUp}
            className="w-full rounded-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
