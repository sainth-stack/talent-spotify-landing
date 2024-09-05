import React from 'react'
import Image from 'next/image';
const RegCard = ({ img, cardHead = "Sample", cardBody = "asag gdka sdgaks gd" }) => {
  return (
    <div>
      <div className='card p-4 border border-light regCard rounded'>
        <div className='text-center'>
          <Image className='card-img-top' src={img} alt={img} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{cardHead}</h5>
          <p className='card-text'>{cardBody}</p>
        </div>
      </div>
    </div>
  )
}

export default RegCard