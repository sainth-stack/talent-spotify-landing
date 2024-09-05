import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function CardBlogDetails({ image, heading, subheading, url = "" }) {
  return (
    <div className="cardhover card col-md-3 mr-3 ml-3 mb-5" style={{ width: '611px', }}>
      <Image src={image} alt="cardicon" className='card-img-top pt-2' width={387} height={387} />

      <div className="card-body">
        <h6 className="card-title font-weight-bold" style={{ size: '19px', fontFamily: 'Poppins', lineHeight: '28.6px' }}>{heading}</h6>
        <p className="card-text" style={{ size: '16px', fontFamily: 'Poppins', lineHeight: '24px' }}>{subheading}</p>
        <a href={url} target='_blank' rel="noreferrer"><span className='text-green cursor-pointer' style={{ fontFamily: 'Poppins', size: '14px', lineHeight: '17.07px' }}>View More</span></a>
      </div>
    </div>
  )
}
