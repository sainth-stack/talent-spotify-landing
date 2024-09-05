import React, { useState } from 'react';
import Navigation from '../Components/navigationNew';
import { Content } from '../Components/Content1';
import Footer from '../Components/Footer';
import image1 from '../assets/svg/image1.svg'
import image2 from '../assets/svg/image2.svg'
import image3 from '../assets/svg/image3.svg'
import image4 from '../assets/svg/image4.svg'
import image7 from '../assets/svg/image7.svg'
import { list1N, list11N, list2N, list21N, list31N, list32N, list41N, list42N, listHN } from '../utilities'
import { useRef } from 'react';
import MobileFooter from '../Components/mobile-version/MobileFooter';
import useWindowSize from "../utilities/UseWindowSize";
import { Home } from '../Components/mobile-version/Home';
import { OKR } from '../Components/mobile-version/okr';
import HowItWorks from '../Components/mobile-version/HowItWorks';
import Awards from '../Components/mobile-version/Awards';
export default function LandingPageNew() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const myRef = useRef(null)
  const homeRef = useRef(null)
  const okrRef = useRef(null)
  const howItWorksRef = useRef(null)
  const awardsRef = useRef(null)
  // const itWorksRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()
  const homerefScroll = () => homeRef.current.scrollIntoView()
  const okrrefScroll = () => okrRef.current.scrollIntoView()
  const howItWorksScroll = () => howItWorksRef.current.scrollIntoView()
  const awardsScroll = () => awardsRef.current.scrollIntoView()
  // const itworksref=()=> ititWorksRefWorks.current.scrollIntoView()

  const isMobile = useWindowSize();
  return (
    <div className='bg-white' style={{ height: '100vh', overflow: 'auto' }}>
      <Navigation showPopup={showPopup} executeScroll={executeScroll} showDemo={showTrail} setShowPopup={() => setShowPopup(false)} setShowDemo={setShowTrail} />
      {isMobile ? <div className='p-3' style={{ marginTop: "80px", marginBottom: '80px' }}>
        <div ref={homeRef}>
          <Home showFreeTrail={() => setShowTrail(true)} showPopup={() => setShowPopup(true)} executeScroll={howItWorksScroll} />
        </div>
        <OKR forwardRef={okrRef} />
        <HowItWorks forwardRef={howItWorksRef} />
        <Awards forwardRef={awardsRef} showPopup={() => setShowPopup(true)} showFreeTrail={() => setShowTrail(true)} />
      </div> : <Content forwardRef={myRef} image1={image1} image6={""} listH={listHN} list1={list1N} list2={list2N} list11={list11N} list21={list21N} image2={image2} image3={image3} list31={list31N} list32={list32N} list41={list41N} list42={list42N} image4={image4} image5={""} list51={""} list52={""} image7={image7} showPopup={() => setShowPopup(true)} showFreeTrail={() => setShowTrail(true)} />
      }
      {isMobile ? <MobileFooter homerefScroll={homerefScroll} okrrefScroll={okrrefScroll} howItWorksScroll={howItWorksScroll} awardsScroll={awardsScroll} /> : <Footer />}
    </div >
  );
}
