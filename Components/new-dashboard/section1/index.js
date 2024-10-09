import React from 'react';
import image from '../../../assets/images/new-dashboard/section.png'; // Assuming the correct path to your image
import Image from 'next/image';
import play from '../../../assets/images/new-dashboard/play.svg'
export const Section1 = ({ reverse = true ,showPopup}) => {
    return (
        <div
            className={`d-flex align-items-start justify-content-center mt-4 mb-4 pb-4`}
            style={{ gap: '15%', paddingTop: '5%' }}
        >

            <div style={{ maxWidth: '50%', width: '30%' }}>
                <h1 className="header">OKR Tool That Makes Your Team Projects Fun & Rewarding</h1>
                <p className="description">
                    Everything that you need to achieve your goal in one place.
                </p>
                <div className="button-group">
                    <button className="start-button" onClick={()=>showPopup(true)}>Start for Free</button>
                    <button className="demo-button" onClick={()=>showPopup(true)}>Book a Demo</button>
                </div>
                <div className="watch-demo">
                    <span>Watch TalentSpotify in Action</span>
                    <button className="play-button">
                        <Image
                            src={play}
                            alt={'title'}
                            className="imagePic"
                            width={24} // You can adjust this based on your design
                            height={24} // You can adjust this based on your design
                            style={{ objectFit: 'cover', borderRadius: '10px' }} // Added styles for better fit
                        />
                    </button>
                </div>
            </div>
            <div
                className="m-0 p-0"
                style={{
                    maxWidth: '50%',
                    paddingRight: reverse ? '20px' : '0',
                    paddingLeft: reverse ? '0' : '20px',
                }}
            >
                <Image
                    src={image}
                    alt={'title'}
                    className="imagePic"
                    width={550} // You can adjust this based on your design
                    height={400} // You can adjust this based on your design
                    style={{ objectFit: 'cover', borderRadius: '10px' }} // Added styles for better fit
                />
            </div>
        </div>
    );
};
