import React from 'react'
import Heading from '../Helper/Heading'
import JobData from '@/data'
import Link from 'next/link'
import FeaturesCard from '../Helper/FeaturesCard'

const Features = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading main='Featured Jobs' sub='Know your worth and find job that qualify your life'/>

        <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {JobData.map((job) => {
                return (
                    <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                        <FeaturesCard job={job}/>
                    </Link>
                )
            })}
        </div>

        <Link href='/job/alljobs'>
            <div className='text-center mt-[3rem]'>
                <button className='px-8 py-2 font-semibold hover:bg-blue-800 transition-all duration-300 bg-blue-700 text-white rounded-lg'>
                    View All Jobs
                </button>
            </div>
        </Link>
    </div>
  )
}

export default Features