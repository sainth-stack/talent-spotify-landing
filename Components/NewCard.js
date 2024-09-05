import React from 'react'
import Image from 'next/image'
export const NewCard = ({ image, heading, subHeading, bgColor }) => {
  return (
    <div className='' style={{
      minHeight: '227px',
      borderRadius: '8px',
      width: "210px",
      textAlign: 'center',
    }}>
      <div style={{
        background: bgColor,
        height: '149px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px 8px 0px 0px'
      }}>
        <Image src={image} width={210} height={150} style={{ marginTop: bgColor = "black" ? "30px" : '25px' }} alt="card icon" />
      </div>
      <div style={{
        background: 'white',
        padding: '10px',
        borderRadius: '0px 0px 8px 8px'
      }}>
        <h2 style={{
          fontWeight: 600,
          fontSize: "10px",
          alignItems: 'center',
          color: '#2A8981',
          paddingTop: '10px'
        }}>
          {heading ? heading : <span>&nbsp;</span>}
        </h2>
        <p style={{
          color: '#9CA3AF',
          lineHeight: "12px",
          fontSize: '10px',
          fontWeight: 400,
        }}>
          {subHeading}
        </p>
      </div>
    </div>
  )
}

