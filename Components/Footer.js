import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // React Icons
import Link from 'next/link';
import logo from '../assets/images/new-dashboard/logo.svg'
import Image from 'next/image';
export default function Footer() {
  return (
    <div style={{ padding: '0px 80px 30px 80px' }}>

      <footer className="footer-card">
        <Image src={logo} alt="TalentSpotify Logo" style={{ marginBottom: '16px', marginTop: "" }} />
        <div className="footer-content">

          <div className="footer-column">
            <div className='flex flex-col '>

              <Link href="/about" className='font-bold' ><h5 className=''>About Us</h5></Link></div>
            <Link href="/career"><a>Career</a></Link>
            <Link href="/login"><a>Login</a></Link>
            <Link href="/contact"><a>Contact Us</a></Link>
            <Link href="/pricing"><a>Pricing</a></Link>
          </div>

          <div className="footer-column ">
            <h5>Products</h5>
            <Link href="/okr"><a>OKR</a></Link>
            <Link href="/rewards"><a>Rewards</a></Link>
            <Link href="/recognition"><a>Recognition</a></Link>
            <Link href="/reviews"><a>Reviews</a></Link>
          </div>

          <div className="footer-column ">
            <h5>Resources</h5>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/webinar"><a>Webinar</a></Link>
            <Link href="/press"><a>Press & Media</a></Link>
            <Link href="/case-studies"><a>Case Studies</a></Link>
          </div>

          <div className="footer-column ">
            <h5>Find us</h5>
            <div className="footer-social">
              <a href="https://www.facebook.com/Talentspotify" target="_blank" rel="noreferrer noopener" className="social-link">
                <FaFacebookF className="social-icon" />
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://twitter.com/TalentSpotify" target="_blank" rel="noreferrer noopener" className="social-link">
                <FaTwitter className="social-icon" />
                <span className="social-name">Twitter</span>
              </a>
              <a href="https://www.instagram.com/talentspotify" target="_blank" rel="noreferrer noopener" className="social-link">
                <FaInstagram className="social-icon" />
                <span className="social-name">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/talentspotify" target="_blank" rel="noreferrer noopener" className="social-link">
                <FaLinkedinIn className="social-icon" />
                <span className="social-name">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/channel/UCUng2BIcaPmfwVOryKAAa2A" target="_blank" rel="noreferrer noopener" className="social-link">
                <FaYoutube className="social-icon" />
                <span className="social-name">YouTube</span>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-text">© 2024 TalentSpotify</span>
          <div className="footer-links">
            <Link href="/privacypolicy"><a>Privacy Policy</a></Link>
            <Link href="/termsandconditions"><a>Terms & Conditions</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
