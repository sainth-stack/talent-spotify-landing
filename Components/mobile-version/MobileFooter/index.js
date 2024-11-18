// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// const SocialLink = ({ href, icon: Icon, name }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer noopener"
//       className="d-flex align-items-center mb-2 text-dark"
//       style={{ textDecoration: 'none' }}
//     >
//       <Icon className="me-2" />
//       <span>{name}</span>
//     </a>
//   );
// };

// function MobileFooter() {
//   return (
//     <footer className="bg-light py-5">
//       <div className="container">
//         {/* Main Grid */}
//         <div className="row gy-4">
//           {/* Logo and Links */}
//           <div className="col-12 col-sm-6 col-lg-3">
//             <Image
//               src="/logo.svg"
//               alt="TalentSpotify Logo"
//               width={150}
//               height={50}
//               className="mb-3"
//             />
//             <div className="d-flex flex-column">
//               <Link href="/aboutus" className="fw-bold mb-2 text-dark">
//                 About Us
//               </Link>
//               <Link href="/careers" className="mb-2 text-dark">
//                 Career
//               </Link>
//               <Link href="https://www.talentspotifyapp.com/auth/login" className="mb-2 text-dark">
//                 Login
//               </Link>
//               <Link href="/contactus" className="mb-2 text-dark">
//                 Contact Us
//               </Link>
//               <Link href="/pricing" className="mb-2 text-dark">
//                 Pricing
//               </Link>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="col-12 col-sm-6 col-lg-3">
//             <h5 className="mb-3">Products</h5>
//             <div className="d-flex flex-column">
//               <Link href="/okr" className="mb-2 text-dark">
//                 OKR
//               </Link>
//               <Link href="/rewards" className="mb-2 text-dark">
//                 Rewards
//               </Link>
//               <Link href="/recognition" className="mb-2 text-dark">
//                 Recognition
//               </Link>
//               <Link href="/reviews" className="mb-2 text-dark">
//                 Reviews
//               </Link>
//             </div>
//           </div>

//           {/* Resources Section */}
//           <div className="col-12 col-sm-6 col-lg-3">
//             <h5 className="mb-3">Resources</h5>
//             <div className="d-flex flex-column">
//               <Link href="/blog" className="mb-2 text-dark">
//                 Blog
//               </Link>
//               <Link href="/webinar" className="mb-2 text-dark">
//                 Webinar
//               </Link>
//               <Link href="/press" className="mb-2 text-dark">
//                 Press & Media
//               </Link>
//               <Link href="/case-studies" className="mb-2 text-dark">
//                 Case Studies
//               </Link>
//             </div>
//           </div>

//           {/* Social Media Section */}
//           <div className="col-12 col-sm-6 col-lg-3">
//             <h5 className="mb-3">Find us</h5>
//             <div className="d-flex flex-column">
//               <SocialLink href="https://www.facebook.com/Talentspotify" icon={FaFacebookF} name="Facebook" />
//               <SocialLink href="https://twitter.com/TalentSpotify" icon={FaTwitter} name="Twitter" />
//               <SocialLink href="https://www.instagram.com/talentspotify" icon={FaInstagram} name="Instagram" />
//               <SocialLink href="https://www.linkedin.com/company/talentspotify" icon={FaLinkedinIn} name="LinkedIn" />
//               <SocialLink href="https://www.youtube.com/channel/UCUng2BIcaPmfwVOryKAAa2A" icon={FaYoutube} name="YouTube" />
//             </div>
//           </div>
//         </div>

//         {/* Separator */}
//         <hr className="my-4" />

//         {/* Bottom Section */}
//         <div className="row">
//           <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
//             <span className="text-muted">© 2024 TalentSpotify</span>
//           </div>
//           <div className="col-12 col-md-6 text-center text-md-end">
//             <Link href="/privacypolicy" className="me-3 text-dark">
//               Privacy Policy
//             </Link>
//             <Link href="/termsandconditions" className="text-dark">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default MobileFooter;
