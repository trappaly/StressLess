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
        className="mb-4 text-xl font-semibold text-indigo-600 dark:text-indigo-400"
      >
        {isSignUp
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"}
      </button>

      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}
