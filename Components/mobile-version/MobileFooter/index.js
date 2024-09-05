import React, { useState } from 'react';
import { Link } from "react-scroll";
import Image from 'next/image';
import dashboard from "../../../assets/svg/home.svg";
import okrProgress from "../../../assets/svg/okrmob1.svg";
import dashboardFill from "../../../assets/svg/homefill.svg";
import okrProgressFill from "../../../assets/svg/okrmob1fill.svg";
import howitworks from "../../../assets/svg/howItWorks.svg";
import howitworksfill from "../../../assets/svg/howItWorksfill.svg";
import awards from "../../../assets/svg/awards.svg";
import awardsfill from "../../../assets/svg/awardsfill.svg";

const MobileFooter = (props) => {
  const [actObj, setIsActObj] = useState({
    analytics: 1,
    okrProgress: 0,
    howItWorks: 0,
    awards: 0
    // celebrationList: 0,
    // leaderBoard: 0
  });
  return (
    <div style={{ position: "fixed", bottom: "0%", width: "100%", zIndex: 1 }}>
      <nav className="m-footer">
        <Link to="analyticsOverview" smooth={true} onClick={() => { setIsActObj({ ...actObj, analytics: 1, okrProgress: 0, howItWorks: 0, awards: 0 }); props.homerefScroll() }}><Image src={actObj.analytics === 1 ? dashboardFill : dashboard} alt="dashboard" /></Link>
        <Link to="okrProgress" smooth={true} onClick={() => { setIsActObj({ ...actObj, analytics: 0, okrProgress: 1, howItWorks: 0, awards: 0 }); props.okrrefScroll() }}><Image src={actObj.okrProgress === 1 ? okrProgressFill : okrProgress} alt="okrProgress" /></Link>
        <Link to="howItWorks" smooth={true} onClick={() => { setIsActObj({ ...actObj, analytics: 0, okrProgress: 0, howItWorks: 1, awards: 0 }); props.howItWorksScroll() }}><Image src={actObj.howItWorks === 1 ? howitworksfill : howitworks} alt="howitworks" /></Link>
        <Link to="awards" smooth={true} onClick={() => { setIsActObj({ ...actObj, analytics: 0, okrProgress: 0, howItWorks: 0, awards: 1 }); props.awardsScroll() }}><Image src={actObj.awards === 1 ? awardsfill : awards} alt="awards" /></Link>
        {/* <Link to="celebrationList" smooth={true} onClick={() => setIsActObj({ ...actObj, analytics: 0, okrProgress: 0, celebrationList: 1, leaderBoard: 0 })}><Image src={actObj.celebrationList === 1 ? celebrationListFill : celebrationList} alt="celebrationList" /></Link>
        <Link to="leaderBoard" smooth={true} onClick={() => setIsActObj({ ...actObj, analytics: 0, okrProgress: 0, celebrationList: 0, leaderBoard: 1 })}><Image src={actObj.leaderBoard === 1 ? leaderBoardFill : leaderBoard} alt="leaderBoard" /></Link> */}
      </nav>
    </div>
  )
}

export default MobileFooter;