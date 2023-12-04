/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader';
import UserBox from './components/UserBox';

const page = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

  return (
    <div className="flex items-center justify-center my-24">
      {loading ? (
        <Loader />
      ) : user ? (
        <UserBox user={user} />
      ) : (
        <p>This is Protected Route</p>
      )}
    </div>
  );
};

export default page;
