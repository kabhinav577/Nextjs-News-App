'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { user, googleSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error, 'ERROR IN SIGN IN');
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error, 'ERROR IN LOGOUT');
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full text-gray-200 border-b-2 flex items-center justify-between p-4">
      {loading && <Loader />}
      <ul className="flex">
        <li className="p-2 cursor-pointer hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>

        <li className="p-2 cursor-pointer hover:text-gray-300">
          <Link href="/favourite">Favourite</Link>
        </li>

        <li className="p-2 cursor-pointer hover:text-gray-300">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign Up
          </li>
        </ul>
      ) : (
        <div className="flex gap-2">
          <Link href="/profile">Welcome, {user.displayName}</Link>
          <p onClick={handleSignOut} className="cursor-pointer text-red-500">
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
