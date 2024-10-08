"use client";

import ThemeToggle from '../components/ThemeToggle';
import AlertDot from '../components/AlertDot';
import BrandLogo from '@/components/BrandLogo';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center mt-[20px]'
    >
      <div className='items-center hidden gap-4 md:flex md:w-3/12'><AlertDot />Available</div>
      <div className='flex w-9/12 md:w-8/12 md:justify-center '>
        {/* <BrandLogo /> */}
        {/* <Image
                            alt={`logo`}
                            height={800}
                            width={800}
                            src={"/images/header_logo.png"}
                            className="brightness-75"
                        /> */}

        <img src="/images/header_logo_light.png" alt="" className = "logo dark:hidden" />
        <img src="/images/header_logo_dark.png" alt="" className = "logo hidden dark:block" />
        
      </div>
      <div className='flex justify-end w-4/12'>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

export default Header;