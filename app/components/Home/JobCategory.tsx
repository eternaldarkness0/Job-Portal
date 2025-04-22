import React from 'react'
import Heading from '../Helper/Heading'
import JobCard from '../Helper/JobCard'

const JobCategory = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading 
        main="Popular Job Categories" 
        sub="2124 jobs live - 205 added today." />

        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
            <JobCard image="/images/icon1.png" category="Finance" openPosition="23" />
            <JobCard image="/images/icon2.png" category="Marketing" openPosition="12" />
            <JobCard image="/images/icon3.png" category="Design" openPosition="15" />
            <JobCard image="/images/icon4.png" category="Development" openPosition="25" />
            <JobCard image="/images/icon5.png" category="Humen Resource" openPosition="27" />
            <JobCard image="/images/icon6.png" category="Automotive Jobs" openPosition="50" />
            <JobCard image="/images/icon7.png" category="Customer Services" openPosition="60" />
            <JobCard image="/images/icon8.png" category="Health and Care" openPosition="10" />
            <JobCard image="/images/icon9.png" category="Project Management" openPosition="11" />
        </div>

    </div>
  )
}

export default JobCategory