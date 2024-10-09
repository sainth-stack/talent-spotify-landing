import React from 'react'
import banner1 from "../assets/svg/banner1.svg";
import banner2 from "../assets/svg/banner2.svg";
import banner3 from "../assets/svg/banner3.svg";
import Link from "next/link";
import Image from 'next/image'
import Button from './Button';
import { dummyApproachNav, dummyCompanyNav, dummyPricing, dummyProducts, dummyResources } from '../utilities';

export const ShowMenuList = ({ menuList = [] }) => {
  return (
    <>
      {
        menuList.length > 0 && menuList.map((item, index) => (
          <Link href={item.path} key={index}><div className="d-flex align-items-center mb-1 heading-2 cursor-pointer menu-option">
            {/* <Image src={item.icon} alt="okr icon" className='productOption' /> */}
            <span className="pl-2">{item.key}</span>
          </div></Link>
        ))
      }
    </>
  )
}

export default function ShowMenu({ selectedType, handleClick, handleClick2 }) {
  return (
    <div className="showMenu" id="showMenu">
      <div className="d-flex flex-wrap justify-content-start align-items-start pb-4 p-3 mb-5 bg-white pt-4 ">
        {selectedType === "product" && <div className="d-flex font-weight-bold">
          <div className='col-lg-3 col-md-12 col-xs-12 col-sm-12'>
            <h3 className="heading-gray">PRODUCTS</h3>
            <ShowMenuList menuList={dummyProducts} />
          </div>
          <div className='d-none d-lg-flex col-md-12 mt-4'>
            <Image src={banner1} alt="banner" />
          </div>
        </div>}
        {selectedType === "resources" && <div className="d-flex font-weight-bold">
          <div className='col-lg-3 col-md-12 col-xs-12 col-sm-12'>
            <h3 className="heading-gray">RESOURCES</h3>
            <ShowMenuList menuList={dummyResources} />
          </div>

          <div className='d-none d-lg-flex col-md-12 mt-4'>
            <Image src={banner2} alt="banner" />
          </div>
        </div>}
        {selectedType === "company" && <div className="d-flex font-weight-bold">
          <div className='col-lg-3 col-md-12 col-xs-12 col-sm-12'>
            <h3 className="heading-gray">COMPANY</h3>
            <ShowMenuList menuList={dummyCompanyNav} />
          </div>

          <div className='d-none d-lg-flex col-md-12 mt-4'>
            <Image src={banner3} alt="banner" />
          </div>
        </div>}

        {selectedType === "approach" && <div className="d-flex font-weight-bold">
          <div className='col-lg-3 col-md-12 col-xs-12 col-sm-12'>
            <h3 className="heading-gray">OUR APPROACH</h3>
            <ShowMenuList menuList={dummyApproachNav} />
          </div>

          <div className='d-none d-lg-flex col-md-12 mt-4'>
            <Image src={banner3} alt="banner" />
          </div>
        </div>}
        {selectedType === "pricing" && <div className="col-md-4 font-weight-bold">
          <h3 className="heading-gray">PRICING</h3>
          <ShowMenuList menuList={dummyPricing} />
        </div>}
        <div className='d-lg-none d-flex justify-content-center align-items-center'>
          <Button className={`border-green bg-green text-white`} text='Free Trail' handleClick={() => handleClick()} />
          <Button className='border-green bg-white text-green' text='Schedule Demo' handleClick={() => handleClick2()} />
          {/*<a href="https://talent-spotify-frontend.vercel.app/auth/login" target="_blank" rel="noreferrer noopener">
            <Button className='border-green bg-white text-green' text='Login' handleClick={() => null} />
          </a>*/}
        </div>
      </div>
    </div>
  )
}
