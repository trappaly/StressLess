import { useState } from 'react';
import { useAuth } from '@/components/context/auth/AuthContext';
import { getAuth } from 'firebase/auth';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const { signIn, loading } = useAuth();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        window.location.href = '/calendar'; // Redirect after successful signup
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Something went wrong.');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

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
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <button
            onClick={handleSignIn}
            className="w-full rounded-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400 transition cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}
