import React, { useState } from 'react';
import Navigation from '../Components/navigationNew';
import { Content } from '../Components/new-dashboard/Content1';
import Footer from '../Components/Footer';
import { useRef } from 'react';
import MobileFooter from '../Components/mobile-version/MobileFooter';
import useWindowSize from "../utilities/UseWindowSize";
import { list1 } from '../utilities/data';
export default function LandingPageNew() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const myRef = useRef(null)
  const homeRef = useRef(null)
  const okrRef = useRef(null)
  const howItWorksRef = useRef(null)
  const awardsRef = useRef(null)
  // const itWorksRef = useRef(null)
  const executeScroll = () => myRef.current?.scrollIntoView()
  const homerefScroll = () => homeRef.current?.scrollIntoView()
  const okrrefScroll = () => okrRef.current?.scrollIntoView()
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView()
  const awardsScroll = () => awardsRef.current?.scrollIntoView({ behavior: 'smooth' })
  // const itworksref=()=> ititWorksRefWorks.current.scrollIntoView()

  const isMobile = useWindowSize();
  return (
    <div className='' style={{ height: '100vh', overflow: 'auto', background: '#EAE3D6' }}>
      <Navigation showPopup={showPopup} executeScroll={executeScroll} showDemo={showTrail} setShowPopup={() => setShowPopup(false)} setShowDemo={setShowTrail} />
      <Content homerefScroll={homeRef} okrrefScroll={okrRef} howItWorksScroll={homerefScroll} awardsScroll={awardsRef} forwardRef={myRef} data={list1} showPopup={() => setShowPopup(true)} showFreeTrail={() => setShowTrail(true)} />
      {isMobile ? <MobileFooter homerefScroll={homerefScroll} okrrefScroll={okrrefScroll} howItWorksScroll={howItWorksScroll} awardsScroll={awardsScroll} /> : <Footer />}
    </div >
  );
}
