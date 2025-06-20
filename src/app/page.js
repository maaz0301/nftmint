'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('Redirecting to /dashboard');
    router.replace('/dashboard');
  }, [router]);

  return null;
};

export default Home;
