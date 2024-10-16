import React from 'react'
import okrIcon from "../assets/svg/okrIcon.svg";
import emptyBox from "../assets/svg/emptyBox.svg";
import rewardsIcon from "../assets/svg/rewardsIcon.svg";
import recognitionIcon from "../assets/svg/recognitionIcon.svg";
import reviewsIcon from "../assets/svg/reviewsIcon.svg";
import swotIcon from "../assets/svg/swotIcon.svg";
import blogIcon from "../assets/svg/blogIcon.svg";
import webinarsIcon from "../assets/svg/webinarsIcon.svg";
import okrExampleIcon from "../assets/svg/okrExampleIcon.svg";
import careersIcon from "../assets/svg/careersIcon.svg";
import pressIcon from "../assets/svg/pressIcon.svg";
import releasesIcon from "../assets/svg/releasesIcon.svg";
import contactusIcon from "../assets/svg/contactusIcon.svg";
import Link from "next/link";
import Image from 'next/image'
import Button from './Button';
import { ShowMenuList } from './ShowMenu';
import { dummyCompanyNav, dummyPricing, dummyProducts, dummyResources } from '../utilities';

export default function ShowMenuMobile({ selectedType, handleClick, handleClick2 }) {
  return (
    <div className="showMenu" id="showMenuMobile">
      <div className="d-flex flex-wrap justify-content-start align-items-start pb-4 p-3 mb-5 bg-white pt-4 ">
        <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12'>
          <h3 className="heading-gray">PRODUCTS</h3>
          <ShowMenuList menuList={dummyProducts} />
        </div>
        <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12'>
          <h3 className="heading-gray">RESOURCES</h3>
          <ShowMenuList menuList={dummyResources} />
        </div>
        {/* <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12'>
          <h3 className="heading-gray">COMPANY</h3>
          <ShowMenuList menuList={dummyCompanyNav} />
        </div> */}
        <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12'>
          <h3 className="heading-gray">PRICING</h3>
          <ShowMenuList menuList={dummyPricing} />
        </div>
        <div className='d-lg-none d-flex  flex-wrap justify-content-center align-items-center'>
          <Button className={`border-green bg-green text-white`} text='Free Trail' handleClick={() => handleClick2()} />
          <Button className='border-green bg-white text-green' text='Schedule Demo' handleClick={() => handleClick()} />
          {/*<a href="https://talent-spotify-frontend.vercel.app/auth/login" target="_blank" rel="noreferrer noopener">
            <Button className='border-green bg-white text-green' text='Login' handleClick={() => null} />
          </a>*/}
          
          <div className="flex">
              <Button style2={{ background: 'transparent', border: 'none' }} className="bg-red-500 login_animation" text='Login' handleClick={() => window.open('https://www.talentspotifyapp.com/login', '_blank')} />
      <Button
        className={`text-white animate_startFree`}
        text='Start for Free'
        style2={{ background: '#083C62', border: 'none' }}
        onClick={() => handleClick()}
      />
          </div>
        </div>

         
      </div>
    </div>
  )
}
