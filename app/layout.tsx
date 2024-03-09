import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import AppBgImg from './bg-image'; 

// Importing CSS in _app.js or _app.tsx is usually a better approach
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`font-inter ${inter.className}`} style={{ minHeight: '100vh' }}>
      <AppBgImg/>
      {children}
    </div>
  );
}