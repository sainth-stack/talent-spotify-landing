// Section2.jsx
import React from 'react';
import profile from '../../../assets/images/new-dashboard/profile.svg';
import Image from 'next/image';

export const Section2 = () => {
    return (
        <div className="section-container">
            <div className="left-section">
                <h2 className="title">Satisfied Customers</h2>
                <p className="left-desc">
                    Hear from enterprises that prefer TalentSpotify
                </p>
                <button className="action-button">Start for Free</button>
            </div>
            <div className="right-card">
                <div className="profile-section">
                    <Image src={profile} alt="Profile" className="profile-image" />
                    <div className="profile-details">
                        <h3 className="name">Kishore Kumar</h3>
                        <p className="title-text">Technical Director, SUNONIX</p>
                    </div>
                </div>
                <div className="card-content">
                    <p className="desc">
                        “Given its transformative potential in eliminating bias and politics,
                        while focusing on employees goals and KPIs, TalentSpotify deserves to be
                        an integral part of the Digital Talent Ecosystem on a global scale.”
                    </p>
                </div>
            </div>

        </div>
    );
};
