'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UserProfile = () => (
  <div className='flex items-center space-x-2 md:space-x-8'>
    <p className='hidden cursor-not-allowed lg:inline'>Bruno</p>
    <Image
      src='/profile.png'
      alt='Bruno'
      width={35}
      height={35}
      className='cursor-pointer rounded'
    />
  </div>
);

const NavLinks = () => (
  <ul className='hidden md:flex md:space-x-4'>
    <li>Home</li>
    <li>TV Shows</li>
    <li>Movies</li>
    <li>Latest</li>
  </ul>
);

const Logo = () => (
  <Image
    src='/logo.svg'
    alt='Netflix'
    width={120}
    height={120}
    className='cursor-pointer'
  />
);
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
