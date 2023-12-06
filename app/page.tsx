'use client';

import EmpytState from './components/EmpytState';
import News from './components/News';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-8 xl:p-12">
      {user ? <News /> : <EmpytState />}
    </main>
  );
}
