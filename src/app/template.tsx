'use client';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Template({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });
  });
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
