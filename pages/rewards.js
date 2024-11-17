import React, {useRef, useState } from 'react';
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import Footer from '../Components/Footer';
import RewardsFinal from '../Components/RewardsContent';

export default function WebinarDetails() {
  const [showTrail, setShowTrail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);

  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () =>
    awardsRef.current?.scrollIntoView({ behavior: "smooth" });

  const isMobile = useWindowSize();

  return (
    <div className='' style={{ height: "100vh", background: "#EAE3D6" }}>
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <RewardsFinal />
      <Footer />
    </div>
  );
}
