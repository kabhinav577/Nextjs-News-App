import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="p-2 cursor-pointer">login</li>
        <li className="p-2 cursor-pointer">signUp</li>
      </ul>
    </div>
  );
};

export default Navbar;
