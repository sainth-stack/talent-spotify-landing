import React, { useState } from 'react';
import image1 from '../../../assets/images/new-dashboard/section1.png'; // Assuming the correct path to your image
import Image from 'next/image';
import play from '../../../assets/images/new-dashboard/play.svg';
import image2 from '../../../assets/images/new-dashboard/section2.png'; // Assuming the correct path to your image
import image3 from '../../../assets/images/new-dashboard/section3.png'; // Assuming the correct path to your image
import image4 from '../../../assets/images/new-dashboard/play.png'; // Assuming the correct path to your image
import image5 from '../../../assets/images/new-dashboard/cross.svg'; // Assuming the correct path to your image

export const Section1 = ({ reverse = true, showPopup, homerefScroll }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // YouTube video ID from the URL
    const videoId = "Z7lCNfJdpj4";

    const handlePlayVideo = () => {
        setIsVideoPlaying(!isVideoPlaying);
    };
    return (
        <div className="section1-container d-flex align-items-start justify-content-center mt-4 mb-4 pb-4" ref={homerefScroll}>
            <div className="text-content" style={{ maxWidth: '50%', width: '30%' }}>
                <h1 className="header">OKR Tool That Makes Your Team Projects Fun & Rewarding</h1>
                <p className="description">
                    Everything that you need to achieve your goal in one place.
                </p>
                <div className="button-group">
             
                    <button className="start-button" onClick={() => showPopup(true)}><span>Start for Free</span></button>
                    <button className="unique-button" style={{ padding: '6px 32px', fontSize: '18px', height: '50px',width:'202px' }} onClick={() => showPopup(true)}>Book a Demo</button>
                </div>
                <div className="watch-demo">
                    <span>14 days free trial. No credit card required</span>
                </div>
            </div>
            <div
                className="image-content m-0 p-0"
                style={{
                    maxWidth: '50%',
                    paddingRight: reverse ? '20px' : '0',
                    paddingLeft: reverse ? '0' : '20px',
                }}
            >
                {isVideoPlaying ? <div className="video-wrapper">
                    <div className="close-button2">
                        <Image
                            src={image5}
                            alt="Play Button Image"
                            width={30} // Adjust size of the play button
                            height={30}
                            onClick={handlePlayVideo}
                        />
                    </div>
                    <iframe
                        width="550"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div> :
                    <div className="image-container" onClick={() => handlePlayVideo()}>
                        {/* Base image with play button overlay */}
                        <div className="main-image-wrapper">
                            <Image
                                src={image1}
                                alt="Base Image"
                                width={550}
                                height={360}
                                className="main-image"
                            />
                            <div className="play-image-container">
                                <Image
                                    src={image4}
                                    alt="Play Button Image"
                                    width={100} // Adjust size of the play button
                                    height={100}
                                    className="play-image"
                                />
                            </div>
                        </div>

                        {/* Top right image */}
                        <div className="top-right-image">
                            <Image
                                src={image2}
                                alt="Top Right Image"
                                width={170}
                                height={200}
                                className="corner-image"
                            />
                        </div>

                        {/* Bottom left image */}
                        <div className="bottom-left-image">
                            <Image
                                src={image3}
                                alt="Bottom Left Image"
                                width={380}
                                height={150}
                                className="corner-image"
                            />
                        </div>
                    </div>}
            </div>
        </div>
    );
};
