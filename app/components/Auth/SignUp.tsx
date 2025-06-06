"use client"
import Image from 'next/image'
import React from 'react'
import chairImage from '@/public/images/chair.jpg'
import { signIn } from 'next-auth/react'

const SignUp = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
      <Image src={chairImage} alt='chair-image' width={400} height={200}/>

      <button 
      onClick={() => {
        signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_URL });
        }}

      className='px-12 py-3 mt-[2rem] bg-purple-600 hover:bg-purple-800 transition-all duration-300 rounded-lg text-white'>Sign Up Now</button>
    </div>
  )
}

export default SignUp