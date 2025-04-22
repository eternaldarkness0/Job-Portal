import React from 'react'

interface Props {
  main: string
  sub: string
}

const Heading = ({main, sub}: Props) => {
  return (
    <div className='text-center p-3'>
        <h1 className='text-black text-[27px] opacity-90 font-bold'>{main}</h1>
        <p className='mt-[1rem] text-[15px] text-gray-800 opacity-80 font-medium'>{sub}</p>
    </div>
  )
}

export default Heading