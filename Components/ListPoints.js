import React from "react";
import Button from "../Components/Button";
import Image from "next/image";
import Link from "next/link";
import tick from '../assets/images/new-dashboard/tick.svg'; // Import your tick icon here
import arrow from '../assets/images/new-dashboard/rightArrow.svg'; // Import your tick icon here

export default function ListPoints({
  heading,
  link = '/',
  subheading,
  list1 = [],
  showPopup
}) {
  return (
    <div
      className="tablet_okr"

      style={{ padding: '20px', borderRadius: '8px', textAlign: 'left', width: '100%' }}
    >

      <h2 style={{
        fontFamily: 'Lato',
        fontSize: '30px',
        fontWeight: 400,
        lineHeight: '36px',
        textAlign: 'left',
        margin: '0 0 24px 0' // Margin for spacing
      }}>{heading}</h2>
      {subheading && <p style={{ fontSize: '16px', color: '#666' }}>{subheading}</p>}
      <ul style={{ listStyleType: 'none', padding: '0' }} className="tablet_okr">
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
      <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}> {/* Gap between header and buttons */}
        <Button handleClick={() => showPopup(true)} className="unique-button" text="Book a Demo">
        </Button>
        <a href={link} className="unique-link" style={{ textDecoration: 'none' }}>
          <span>
            Learn more
          </span>
          <Image src={arrow} alt="Arrow" width={18} height={18} style={{}} />
        </a>
      </div>
    </div >
  );
}
