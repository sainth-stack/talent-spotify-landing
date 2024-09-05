import Image from 'next/image'
import React from 'react'
export default function Card3({ data, top, setShowPopup }) {
  const head = data.heading === 'Pro Plan' ? '#2A8881' : ''
  const back = data.heading === 'Pro Plan' ? 'white' : '#2A8881'
  const desc = data.description === 'Pro + Integration' ? '20' : '13'
  const fw = data.description === 'Pro + Integration' ? '700' : '400'
  const lh = data.description === 'Pro + Integration' ? '30' : '19.5'
  return (
    <div className="pricecard cardhover card col-md-3 mb-5 mt-5" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {top && <p className='text-center bg-green text-white rounded mt-minus font-weight-bold'>MOST POPULAR PLAN</p>}
      <div className={data.heading === 'Basic Plan' ? 'text-center mt-4' : 'text-center mt-3'}>      <Image src={data.image} alt="cardicon" className={data.heading === 'Basic Plan' ? 'mb-3 overflow1' : 'mb-3 overflow1'} />
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '24px', fontFamily: 'Poppins', fontWeight: '900', lineHeight: '36px', textAlign: 'center' }}>{data.heading}</h5>
        <p className="card-text text-secondary" style={{ fontSize: `${desc}px`, fontFamily: 'Poppins', lineHeight: `${lh}px`, fontWeight: `${fw}`, textAlign: 'center', color: '#A4A4A4' }}>{data.description}</p>
        <h2 className="card-title" style={{ fontSize: '20px', fontFamily: 'Poppins', lineHeight: '45px', fontWeight: '700', textAlign: 'center' }}>{data.name}</h2>
        <div className="m-2 p-2 text-center" style={{ width: "max-content" }}>
          <button
            style={{
              fontSize: "14px",
              color: back,
              border: '1px solid #2A8881',
              backgroundColor: head
            }}
            className="rounded form-control font-weight-bold"
            onClick={() => setShowPopup(true)}
          >
            {data.buttonText}
          </button>
        </div>
        <hr />
        <p className="card-text text-secondary" style={{ size: '13px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '19.5px', textAlign: 'center', color: '#A4A4A4' }}>{data.description2}</p>
        <ul>
          {data.keypoints.map((item, index) => {
            return (
              <li className="card-text mt-2 mb-2 pt-2 pb-2" key={index} style={{ size: '12', fontFamily: 'Poppins', lineHeight: '20px', fontWeight: '400', textAlign: '' }}>{item}</li>

            )
          })}
        </ul>
      </div>
    </div>
  )
}
