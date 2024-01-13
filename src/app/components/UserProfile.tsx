import Image from 'next/image';
import React from 'react';

export const UserProfile = () => (
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
