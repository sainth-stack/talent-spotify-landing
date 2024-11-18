import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/new-dashboard/logo.svg";
import useWindowSize from "../utilities/UseWindowSize";

// Reusable component for footer sections
const FooterSection = ({ title, links }) => (
  <div className="footer-column mt-3">
    {title && <h5>{title}</h5>}
    {links.map((link, index) => (
      <Link href={link.href} key={index}>
        <a className="" style={{fontWeight:"600"}}>{link.label}</a>
      </Link>
    ))}
  </div>
);

export default function Footer() {
  const isMobile = useWindowSize();

  return (
    <div style={{ backgroundColor: "#ebe3d5" }}>
      <div style={{ padding: isMobile ? "0px" : "0px 80px 30px 80px" }}>
        <footer className="footer-card">
          <div className="footer-content">
            {/* Column 1: Logo and Links */}
            <div className="footer-column">
              <Image src={logo} alt="TalentSpotify Logo" />
              <FooterSection
                links={[
                  { href: "/aboutus", label: "About Us" },
                  { href: "/careers", label: "Career" },
                  { href: "https://www.talentspotifyapp.com/auth/login", label: "Login" },
                  { href: "/contactus", label: "Contact Us" },
                  { href: "/pricing", label: "Pricing" },
                ]}
              />
            </div>

            {/* Column 2: Products */}
            <FooterSection
              title="Products"
              links={[
                { href: "/okr", label: "OKR" },
                { href: "/rewards", label: "Rewards" },
                { href: "/recognition", label: "Recognition" },
                { href: "/reviews", label: "Reviews" },
              ]}
            />

            {/* Column 3: Resources */}
            <FooterSection
              title="Resources"
              links={[
                { href: "/blog", label: "Blog" },
                { href: "/webinar", label: "Webinar" },
                { href: "/press", label: "Press & Media" },
                { href: "#", label: "Case Studies" },
              ]}
            />

            {/* Column 4: Social Links */}
            <div className="footer-column mt-3">
              <h5>Find us</h5>
              <div className="footer-social " >
                <a
                  href="https://www.facebook.com/Talentspotify"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <FaFacebookF className="social-icon" />
                  <span className="social-name" style={{fontWeight:"600"}}>Facebook</span>
                </a>
                <a
                  href="https://twitter.com/TalentSpotify"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <FaTwitter className="social-icon" />
                  <span className="social-name"  style={{fontWeight:"600"}}>Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com/talentspotify"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <FaInstagram className="social-icon" />
                  <span className="social-name" style={{fontWeight:"600"}}>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/talentspotify"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <FaLinkedinIn className="social-icon" />
                  <span className="social-name" style={{fontWeight:"600"}}>LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUng2BIcaPmfwVOryKAAa2A"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-link"
                >
                  <FaYoutube className="social-icon" />
                  <span className="social-name" style={{fontWeight:"600"}}>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <span className="footer-text">© 2024 TalentSpotify</span>
            <div className="footer-links">
              <Link href="/privacypolicy">
                <a>Privacy Policy</a>
              </Link>
              <Link href="/termsandconditions">
                <a>Terms & Conditions</a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
