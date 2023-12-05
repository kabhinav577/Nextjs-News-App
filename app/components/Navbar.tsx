'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';
import { FaHamburger } from 'react-icons/fa';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { user, googleSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
    } catch (error) {
      console.log(error, 'ERROR IN SIGN IN');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await logOut();
    } catch (error) {
      console.log(error, 'ERROR IN LOGOUT');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };

    checkAuthentication();
    setLoading(false);
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 w-full text-gray-200 border-b-2 flex items-center justify-between p-8">
      {loading && <Loader />}
      {/* Hamburger icon for mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="text-2xl font-bold text-red-500 hover:text-red-400">
            X
          </div>
        ) : (
          <div>
            <FaHamburger size={25} className="hover:text-gray-300" />
          </div>
        )}
      </div>
      {/* DESKTOP ONLY  */}
      <ul className="md:flex hidden">
        <li className="p-2 cursor-pointer hover:text-gray-300 md:text-[1rem]">
          <Link href="/">Home</Link>
        </li>

        <li className="p-2 cursor-pointer hover:text-gray-300 md:text-[1rem]">
          <Link href="/favourite">Favourite</Link>
        </li>

        <li className="p-2 cursor-pointer hover:text-gray-300 md:text-[1rem]">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Navigation links */}
      {isMenuOpen ? (
        <div
          className={`min-w-[70vw] flex justify-center items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/75 rounded-lg backdrop-blur-md py-32`}
        >
          <ul
            className={`flex flex-col justify-between items-center text-gray-700`}
          >
            <li
              className="p-2 cursor-pointer hover:text-gray-500 md:text-xl"
              onClick={toggleMenu}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="p-2 cursor-pointer hover:text-gray-600"
              onClick={toggleMenu}
            >
              <Link href="/favourite">Favourite</Link>
            </li>
            <li
              className="p-2 cursor-pointer hover:text-gray-600"
              onClick={toggleMenu}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      ) : null}
      {/* User authentication */}
      {!loading && (
        <div className="flex gap-2">
          {!user ? (
            <ul className="flex">
              <li
                onClick={handleSignIn}
                className="p-2 cursor-pointer hover:text-gray-300 "
              >
                Login
              </li>
              <li
                onClick={handleSignIn}
                className="p-2 cursor-pointer hover:text-gray-300"
              >
                Sign Up
              </li>
            </ul>
          ) : (
            <div className="flex gap-2">
              <Link href="/profile">Welcome, {user.displayName}</Link>
              <p
                onClick={handleSignOut}
                className="cursor-pointer text-red-500 hover:text-red-300"
              >
                Sign Out
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
