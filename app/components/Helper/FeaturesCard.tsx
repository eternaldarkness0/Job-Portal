import { Job } from '@/data';
import Image from 'next/image';
import React from 'react'
import { BiMoney } from 'react-icons/bi';
import { FaMapLocation, FaRegBookmark } from 'react-icons/fa6';

interface Props {
    job: Job;
}

const FeaturesCard = ({ job }: Props) => {
  return (
    <div className='relative p-4 mb-6 border-2 cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 border-gray-500/10 rounded-lg'>
        <div className='flex items-center space-x-6'>
            <div>
                <Image src={job?.image} alt={job.title} width={50} height={50}/>
            </div>

            <div>
                <h1 className='text-[17px] font-semibold mb-[0.4rem]'>{job?.title}</h1>

                <div className='flex items-center space-x-4 md:space-x-10'>
                    <div className='flex items-center space-x-2'>
                        <FaMapLocation className='w-[0.8rem] h-[0.8rem] text-pink-700'/>
                        <p className='text-[14px] text-black/60 font-semibold'>{job?.location}</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <BiMoney className='w-[0.8rem] h-[0.8rem] text-pink-700'/>
                        <p className='text-[14px] text-black/60 font-semibold'>{job?.salary}</p>
                    </div>
                </div>

                <div className='flex items-center space-x-2 sm:space-x-4 mt-[1rem]'>
                    <div className='text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full font-semibold capitalize bg-green-400/30 hover:rotate-6 transition-all duration-300'>
                        {job?.jobtype}
                    </div>

                    <div className='text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full font-semibold capitalize bg-pink-400/30 hover:-rotate-6 transition-all duration-300'>
                        Private
                    </div>

                    <div className='text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full font-semibold capitalize bg-fuchsia-400/30 hover:rotate-6 transition-all duration-300'>
                        Urgent
                    </div>
                </div>
            </div>
        </div>
        
        <div className='absolute top-[1rem] right-[1rem]'>
            <FaRegBookmark  className='w-[1rem] h-[1rem]'/>
        </div> 

    </div>
  )
}

export default FeaturesCard