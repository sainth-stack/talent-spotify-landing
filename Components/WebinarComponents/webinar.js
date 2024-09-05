import React from 'react'
import Image from "next/image";
import yellowdot from "../../assets/svg/yellowdot.svg";
import { list1, list11, list2, list21, list31, list32, list41, list42, list51, list52 } from '../../utilities'
import webinar1 from '../../assets/svg/webinar1.svg'
import image2 from '../../assets/svg/image2.svg'
import image3 from '../../assets/svg/image3.svg'
import image4 from '../../assets/svg/image4.svg'
import image5 from '../../assets/svg/image5.svg'
import { WebinarContent } from './WebinarContent';

const Webinar = () => {
  return (
    <>
      <div className='d-flex justify-content-center mt-4 pt-5'>
        <div className='webdesc-div'>
          <div className="web-yellowDot">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          <p className='webDescription'>We know that reading through page after page in order to understand OKRs can get <br />a little tiring. For those of you that like to absorb information in a more visual<br /> manner, we have put together a series of webinars that will help you understand, <br />launch and use OKRs.</p>
        </div>
      </div>
      <div className='mb-3'>
        <WebinarContent image1={webinar1} yellowdot={yellowdot} list1={list1} list2={list2} list11={list11} list21={list21} image2={image2} image3={image3} list31={list31} list32={list32} list41={list41} list42={list42} image4={image4} image5={image5} list51={list51} list52={list52} showPopup={() => setShowPopup(true)} />
      </div>
    </>
  )
}

export default Webinar