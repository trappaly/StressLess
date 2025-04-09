'use client';
import React from 'react';
// import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import SignInSignUp from '@/components/ui/auth/SignInSignUp';

const Home: React.FC = () => {
  // const router = useRouter();

  const scrollToSignUp = () =>
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-sans">

      {/* Hero */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-800/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
        />
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          StressLess
        </motion.h1>
        <motion.p
          className="text-xl mt-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          StressLess is your smart schedule designed to help you stay productive
          without burning out.
          <br />
          Join us today and take the first step toward a healthier, happier you.
        </motion.p>
        <motion.div
          className="mt-10 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          <Button
            onClick={scrollToSignUp}
            className="rounded-full px-6 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-all"
          >
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-indigo-500 dark:text-indigo-300"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <Calendar className="w-32 h-32 mx-auto" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold mb-4">What is StressLess?</h2>
            <p className="text-lg">
              StressLess is an app that helps you plan out your semester based
              off your sleep time, blocked class time, study preferences
              instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Sign-in */}
      <section id="signin-signup" className="max-w-md mx-auto px-6 py-20">
        <SignInSignUp />
      </section>
      {/*<section id="signin" className="max-w-md mx-auto px-6 py-20">*/}
      {/*  <div className="bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">*/}
      {/*    <h3 className="text-2xl font-semibold mb-6 text-center">Sign In</h3>*/}
      {/*    <div className="space-y-4">*/}
      {/*      <Input*/}
      {/*        type="text"*/}
      {/*        placeholder="Username"*/}
      {/*        className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"*/}
      {/*      />*/}
      {/*      <Input*/}
      {/*        type="password"*/}
      {/*        placeholder="Password"*/}
      {/*        className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"*/}
      {/*      />*/}
      {/*      <Button*/}
      {/*        onClick={() => router.push('/dashboard')}*/}
      {/*        className="w-full rounded-full py-3 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400 transition"*/}
      {/*      >*/}
      {/*        Sign In*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default Home;
