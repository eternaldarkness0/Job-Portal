import ApplyButton from '@/app/components/Helper/ApplyButton';
import FeaturesCard from '@/app/components/Helper/FeaturesCard';
import { authOptions } from '@/auth';
import JobData from '@/data'
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'


const JobDetails = async ({ params }: { params: { id: string } }) => {

    const singleJob = JobData.find((job) => job.id.toString() == params.id);
    const session = await getServerSession(authOptions);

    const firstFourJob = JobData.slice(0, 4);


return (
    <div className='mt-20 mb-12'>
        <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
            <div className='flex-[0.7]'>
                <FeaturesCard job={singleJob!}/>
            </div>
            {session && <ApplyButton />}
            {!session && (
                <Link href='/signup'>
                    <button className='px-8 py-3 bg-emerald-600 rounded-lg text-white font-semibold hover:bg-emerald-600/80 duration-300 transition-all'>Sign Up To Apply</button>
                </Link>
            )}
        </div>

        <div className='mt-16 w-[80%] mx-auto'>
            <h1 className='text-[20px] font-semibold'>Job Description</h1>
            <p className='mt-4 text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, praesentium possimus? Qui, accusantium fuga ducimus temporibus impedit maiores, vero vitae sit voluptatum doloribus aperiam facilis recusandae cupiditate perferendis quaerat natus hic amet eligendi dolorum soluta. Quo laboriosam quas saepe suscipit ipsam praesentium? Necessitatibus voluptatum dicta sed. Exercitationem libero et aliquam?
            </p>

            <h1 className='text-[20px] font-semibold mt-8'>Key Responsibilities</h1>
            <p className='mt-4 text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, praesentium possimus? Qui, accusantium fuga ducimus temporibus impedit maiores, vero vitae sit voluptatum doloribus aperiam facilis recusandae cupiditate perferendis quaerat natus hic amet eligendi dolorum soluta. Quo laboriosam quas saepe suscipit ipsam praesentium? Necessitatibus voluptatum dicta sed. Exercitationem libero et aliquam?
            </p>

            <h2 className='text-[20px] mt-8 font-semibold'>Skills</h2>
            <ul className='mt-4'>
                <li className='text-black/70 mt-4'>React JS</li>
                <li className='text-black/70 mt-4'>Next JS</li>
                <li className='text-black/70 mt-4'>Tailwind CSS</li>
                <li className='text-black/70 mt-4'>TypeScript</li>
                <li className='text-black/70 mt-4'>Next Auth</li>
            </ul>

            <h3 className='text-[20px] mt-8 font-semibold'>
                Related Job
            </h3>

        <div className='mt-4'>
            {firstFourJob.map((job) => {
                return (
                    <Link href={`/job/jobdetails/${job.id}`} key={job.id} className='space-y-8'>
                        <FeaturesCard job={job}/>
                    </Link>
                )
            })}
        </div>

        </div>
    </div>
) 
}

export default JobDetails