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
    <div className="section1-container d-flex align-items-start w-full justify-content-center mt-4 mb-4 pb-4 " ref={homerefScroll}>
       <div className="section1-container  ">
            <div className="text-content" style={{ maxWidth: '50%', width: '30%' }}>
            <h1 className="header font-bold lg:font-normal lg:text-black">
                OKR Tool That Makes Your Team Projects Fun & Rewarding
            </h1>
            <p className="description sm:text-center sm:font-bold md:text-left ">
                Everything that you need to achieve your goal in one place.
            </p>
            <div className="button-group">
                <button className="start-button lg:!bg-red-500 sm:mx-2 hover:bg-blue-600 transition duration-200 ease-in" onClick={() => showPopup(true)}><span>Start for Free</span></button>
                <button className="demo-button" onClick={() => showPopup(true)}>Book a Demo</button>
            </div>
            <div className="watch-demo">
                <span>14 days free trial. No credit card required</span>
            </div>
        </div>
        <div className="image-content m-0 p-0" style={{ maxWidth: '50%', paddingRight: reverse ? '20px' : '0', paddingLeft: reverse ? '0' : '20px' }}>
            {isVideoPlaying ? <div className="video-wrapper">
                <div className="close-button2">
                    <Image
                        src={image5}
                        alt="Play Button Image"
                        width={30}
                        height={30}
                        onClick={handlePlayVideo}
                    />
                </div>
                <iframe
                    className='video'
                    width="550"
                    height="360"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div> :
                <div className="image-container  lg:mx-0 xs:mx-0" onClick={() => handlePlayVideo()}>
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
                                width={100}
                                height={100}
                                className="play-image"
                            />
                        </div>
                    </div>
                    <div className="top-right-image">
                        <Image
                            src={image2}
                            alt="Top Right Image"
                            width={170}
                            height={200}
                            className="corner-image"
                        />
                    </div>
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
    </div>

    );
};
