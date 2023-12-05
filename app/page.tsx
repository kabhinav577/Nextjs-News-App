'use client';

import EmpytState from './components/EmpytState';
import News from './components/News';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="flex h-[90vh] flex-col items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16">
      {user ? <News /> : <EmpytState />}
    </main>
  );
}
