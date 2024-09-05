import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Card({ image, heading, subheading }) {
  return (
    <div className="cardhover card col-md-3 mr-3 ml-3 mb-5" style={{ width: '611px', }}>
      <Image src={image} alt="cardicon" className='card-img-top pt-2' width={387} data-toggle="modal" data-target="#exampleModal" />

      <div className="card-body">
        <h6 className="card-title font-weight-bold text-uppercase text-green" style={{ size: '18px', fontFamily: 'Poppins', lineHeight: '28.6px' }}>{heading}</h6>
        <p className="card-text" style={{ size: '16px', fontFamily: 'Poppins', lineHeight: '24px' }}>{subheading}</p>
        <Link href="/webinardetails"><span className='text-green cursor-pointer' style={{ fontFamily: 'Poppins', size: '14px', lineHeight: '17.07px' }}>Performance and growth</span></Link>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
