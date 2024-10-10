import React from 'react';
import Image from 'next/image';
import sectionImage from '../../assets/images/new-dashboard/section.png'; // Ensure the path is correct
import play from '../../assets/images/new-dashboard/play.svg';

export const Home = (props) => {
  return (
    <div ref={props.forwardRef} style={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Section 1 content */}
      <div className="text-content" style={{ textAlign: 'center', maxWidth: '90%', marginBottom: '20px' }}>
        <h1 className="header" style={{ fontSize: '24px', fontWeight: '600' }}>
          Unleash Your Team’s Potential with Our OKR Tool
        </h1>
        <p className="description" style={{ fontSize: '16px', margin: '10px 0' }}>
          Transform your goal-setting process into a collaborative and engaging experience. Our OKR tool helps teams stay aligned and motivated.
        </p>
        <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
          <button
            className="start-button"
            onClick={() => props.showPopup(true)}
            style={{ backgroundColor: '#2A8881', color: '#FFF', padding: '10px', border: 'none', borderRadius: '5px' }}
          >
            Start for Free
          </button>
          <button
            className="demo-button"
            onClick={() => props.showPopup(true)}
            style={{ backgroundColor: '#FFF', color: '#2A8881', padding: '10px', border: '1px solid #2A8881', borderRadius: '5px' }}
          >
            Book a Demo
          </button>
        </div>
        <div className="watch-demo" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <span style={{ marginRight: '5px', fontSize: '12px' }}>Watch TalentSpotify in Action</span>
          <button className="play-button" onClick={() => window.open('https://youtu.be/Z7lCNfJdpj4?si=4SmKQKEKcYI0iEbr', '_blank')}>
            <Image
              src={play}
              alt="Play Video"
              width={24}
              height={24}
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="image-content" style={{ maxWidth: '90%', textAlign: 'center' }}>
        <Image
          src={sectionImage}
          alt="Section Illustration"
          width={550}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '10px', width: '100%', height: 'auto' }} // Ensures responsiveness
        />
      </div>
    </div>
  );
};

export default Home;
