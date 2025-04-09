import { useState } from 'react';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';

export default function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignInSignUp = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div className="text-center">
      <button
        onClick={toggleSignInSignUp}
        className="mb-4 text-xl font-semibold text-indigo-600 dark:text-indigo-400 focus:outline-none"
      >
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <span
              className="underline underline-offset-4 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Sign In
            </span>
           </>
        ) : (
          <>
            Don&apos;t have an account?{' '}
            <span
              className="underline underline-offset-4 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
            >
              Sign Up
            </span>
          </>
        )}
      </button>

      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}
