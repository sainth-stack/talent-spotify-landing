import Button from "../Components/Button";
import Dropdown from "../Components/DropdownNormal";
import Logo from "../Components/Logo";
import LogoMobile from "../Components/Logo/Mobile_logo";
import React from "react";
import Link from 'next/link'
import AnchorLink from "./AnchorLink";
import menuBars from '../assets/svg/menuBars.svg';
import menuBarsWhite from '../assets/svg/menuBarsWhite.svg';
import { dummyCompany, dummyPricing, dummyProducts, dummyResources } from "../utilities";
import Image from "next/image";
import { useRouter } from "next/router";
export function Nav({
  dummyData,
  handleClick,
  handleClick2,
  bgColor,
  textColor,
  setType,
  selectedType,
  isMobile
}) {
  const router = useRouter();
  const showHidden = () => {
    document.getElementById("showMenu").style.display = document.getElementById("showMenu").style.display === "block" ? "none" : "block";
  }
  const showHiddenMobile = () => {
    document.getElementById("showMenuMobile").style.display = document.getElementById("showMenuMobile").style.display === "block" ? "none" : "block";
  }
  return <div className={`justify-content-between align-items-center pt-2 pb-2 pl-3 ${!isMobile ? 'd-flex' : 'p-3 '}`} style={{ background: isMobile ? "white" : (router.pathname === "/" ? "#e8e1d5" : "#2A8981"), boxShadow: isMobile ? "0px 2px 4px 0px #00000014" : "", position: 'fixed', top: 0, right: 0, left: 0, zIndex: 999 }}>
    {!isMobile && <Logo logoImg="2" textColor={textColor ? true : false} />}
    {/*<AnchorLink title="About us" path="/aboutus" />*/}
    <div className="d-none d-lg-flex flex-wrap justify-content-start align-items-center">
      <Dropdown title="Product" selectedType={selectedType} bgColor={bgColor} options={dummyProducts} handleClick={() => {
        setType("product");
        showHidden();
      }
      } />
      <Dropdown title="Resources" selectedType={selectedType} bgColor={bgColor} options={dummyResources} handleClick={() => {
        setType("resources");
        showHidden()
      }
      } />
      <Dropdown title="Pricing" selectedType={selectedType} bgColor={bgColor} options={dummyPricing} handleClick={() => {
        setType("pricing");
        showHidden()
      }
      } />
      <Dropdown title="About Us" selectedType={selectedType} bgColor={bgColor} options={dummyCompany} handleClick={() => {
        setType("company");
        showHidden()
      }
      } />

      {/*<Dropdown title="Our Approach" selectedType={selectedType} bgColor={bgColor} options={dummyCompany} handleClick={() => {
        setType("approach");
        showHidden()
      }
      } />*/}
      {/*<a href="https://talent-spotify-frontend.vercel.app/auth/login" target="_blank" rel="noreferrer noopener">
        <Button className='border-green bg-white text-green' text='Login' handleClick={() => null} />
      </a>*/}
    </div>
    <div className="d-block d-lg-none d-flex">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" onClick={() => showHiddenMobile()} aria-expanded="false" aria-label="Toggle navigation">
        <Image src={bgColor ? menuBarsWhite : menuBars} alt="menu" />
      </button>
      {isMobile && <div className="pl-3"><LogoMobile /></div>}
      {/* <Button className={`border-green ${bgColor ? 'bg-white' : 'bg-green'} ${textColor ? 'text-green' : 'text-white'}`} text='Free Trail' handleClick={() => handleClick()} /> */}
      {/*<Button className={`border-green ${bgColor ? 'bg-white' : 'bg-green'} ${textColor ? 'text-green' : 'text-white'}`} text='Menu' handleClick={() => showHidden()} />*/}
    </div>
    <div className="d-none d-lg-flex">
      {/*<AnchorLink title="About us" path="/aboutus" textColor={textColor} />*/}
      <Button className={`border-green ${bgColor ? 'bg-white' : 'bg-green'} ${textColor ? 'text-green' : 'text-white'}`} text='Free Trial & Consultancy' handleClick={() => handleClick2()} />


      <Button className={`border-green bg-white text-green`} text='Schedule Demo' onClick={() => handleClick()} />

    </div>
  </div >;
}
