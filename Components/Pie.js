import React from 'react'
import Image from 'next/image'
const Pie = ({ image }) => {
  return (
    <div className='p-5'>
      <Image src={image} alt="pie" />
    </div>
  )
}

export default Pie