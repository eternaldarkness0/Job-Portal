import React from 'react'
import LogoIcon from '@/public/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import User from '../Helper/User'

const Navbar = async () => {

  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className='h-[13vh] overflow-hidden shadow-md'>
      <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>

        {/* logo section */}
        <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
          <Link href="/">
            <Image 
            src={LogoIcon} 
            alt='logo-image' 
            width={150} 
            height={150} 
            className='w-[100%] h-[100%]'/>
          </Link>
        </div>

        {/* navbar links */}
        <div className='flex items-center space-x-4'>
          {!session && (
          <Link href="/signup">
            <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 text-white font-semibold bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300'>Sign Up</button>
          </Link>
          )}
          {session && <User session={session} />}
          {session && (
            <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 text-white font-semibold bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300'>Post a Job</button>
          )}
        </div>


      </div>
    </div>
  )
}

export default Navbar