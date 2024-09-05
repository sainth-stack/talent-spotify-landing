import React from 'react'
import Image from 'next/image'
export const NewMobileCard = ({ image, heading, subHeading, bgColor,width='100px' }) => {
  return (
    <div className='' style={{
      // height: '150px',
      borderRadius: '8px',
      // width:width? width : "100px",
      textAlign: 'center',
    }}>
      <div style={{
        background: bgColor,
        // height: '70px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px 8px 0px 0px'
      }}>
        <Image src={image} width={210} height={150} style={{ marginTop: bgColor = "black" ? "30px" : '25px' }} alt="card icon" />
      </div>
      <div style={{
        background: 'white',
        padding: '10px',
        borderRadius: '0px 0px 8px 8px',
        height: "56px"
      }}>
        <h2 style={{
          fontWeight: 600,
          fontSize: "4.66px",
          alignItems: 'center',
          lineHeight: "6.99px",
          color: '#2A8981',
          paddingTop: '3px'
        }}>
          {heading}
        </h2>
        <h6 style={{
          color: '#9CA3AF',
          lineHeight: "5.24px",
          fontSize: "4px",
          fontWeight: 400,
        }}>
          {subHeading}
        </h6>
      </div>
    </div>
  )
}

