'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Don't show navbar on vCard page
  if (pathname === '/vcard') {
    return null;
  }
  
  return <Navbar />;
}