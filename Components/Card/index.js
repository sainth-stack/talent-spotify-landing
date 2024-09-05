import Image from 'next/image'
import React from 'react'

export default function Card({ icon, heading, subheading }) {
  return (
    <div className='bg-white text-center shadow rounded p-2 m-2 w280'>
      <Image src={icon} alt="cardicon" className='iconSize' />
      <h3 className='heading font-weight-bold'>{heading}</h3>
      <h6 className='subheading'>{subheading}</h6>
    </div>
  )
}

export function CardClient({ icon, heading, subheading }) {
  return (
    <div className='bg-white text-center rounded p-2 m-2 w280'>
      <Image src={icon} alt="cardicon" className='iconSize' />
    </div>
  )
}
