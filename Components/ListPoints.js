import React from "react";
import Button from "../Components/Button";
import Image from "next/image";
import Link from "next/link";
import tick from '../assets/images/new-dashboard/tick.svg'; // Import your tick icon here
import arrow from '../assets/images/new-dashboard/rightArrow.svg'; // Import your tick icon here

export default function ListPoints({
  heading,
  link='/',
  subheading,
  list1 = [],
  showPopup
}) {
  return (
    <div style={{ padding: '20px', borderRadius: '8px', textAlign: 'left' }}>
      <h2 style={{
        fontFamily: 'Lato',
        fontSize: '30px',
        fontWeight: 400,
        lineHeight: '36px',
        textAlign: 'left',
        margin: '0 0 24px 0' // Margin for spacing
      }}>{heading}</h2>
      {subheading && <p style={{ fontSize: '16px', color: '#666' }}>{subheading}</p>}
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {list1.map((item, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '21px',
            textAlign: 'left',
            color: '#000000'
          }}>
            <Image src={tick} alt="Tick" width={18} height={18} />
            <span style={{ marginLeft: '10px' }}>{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '24px', display: 'flex', gap: '20px' }}> {/* Gap between header and buttons */}
        <Button handleClick={()=>showPopup(true)} className="" text="Book a Demo" style2={{
          width: '178px',
          height: '40px',
          padding: '6px 32px',
          borderRadius: '46px',
          border: '2px solid #083C62',
          opacity: 1, // Set to 1 for visibility
          background:'transparent'
        }}>

        </Button>

        <Link href={link} style={{
          marginLeft: '10px',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '27px',
          textAlign: 'center',
          background: '#0C5FFF',
          padding: '6px 12px',
          borderRadius: '4px',
          color: '#FFFFFF' // Assuming white text color for the button
        }}>
          <span style={{ display: 'flex', alignItems: 'center', color: '#0C5FFF', gap: '5px', cursor: 'pointer' }}> {/* Wrap children in a span */}
            Learn more
            <Image src={arrow} alt="Arrow" width={18} height={18} style={{ marginLeft: '4px' }} /> {/* Added marginLeft for gap */}
          </span>
        </Link>
      </div>
    </div>
  );
}
