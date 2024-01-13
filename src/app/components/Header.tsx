'use client';
import React from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();
  return (
    <header
      className={`${
        isScrolled && 'bg-gray-950'
      } fixed top-0 z-50 flex w-full items-center justify-between  bg-gradient-to-b from-gray-950 to-transparent px-4 py-4 opacity-75 transition-all hover:bg-gray-950 lg:px-10 lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
