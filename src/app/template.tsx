import React from 'react';
import Navbar from './navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
