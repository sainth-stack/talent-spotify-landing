import Button from "../Components/Button";
import Dropdown from "../Components/DropdownNormal";
import Logo from "../Components/Logo";
import LogoMobile from "../Components/Logo/Mobile_logo";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import AnchorLink from "./AnchorLink";
import menuBars from '../assets/svg/menuBars.svg';
import menuBarsWhite from '../assets/svg/menuBarsWhite.svg';
import { dummyCompany, dummyProducts, dummyResources } from "../utilities";
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

  const handleClickOutside = (event) => {
    const target = event.target;
    const dropdownElements = document.querySelectorAll('.dropdown');
    const isClickInsideDropdown = Array.from(dropdownElements).some((dropdown) => dropdown.contains(target));
    if (!isClickInsideDropdown) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  const [openDropdown, setOpenDropdown] = useState(null);
  return <div className={` tablet_nav justify-content-between align-items-center pt-2 pb-2 ${!isMobile ? 'd-flex custom-padding' : 'p-3 '}`} style={{ background: isMobile ? "white" : (router.pathname === "/" ? "#EAE3D6" : "#2A8981"), boxShadow: isMobile ? "0px 2px 4px 0px #00000014" : "", position: 'fixed', top: 0, right: 0, left: 0, zIndex: 999 }}>
    {!isMobile && <Logo logoImg="2" textColor={textColor ? true : false} />}
    {/*<AnchorLink title="About us" path="/aboutus" />*/}
    <div className="d-none   d-lg-flex flex-wrap justify-content-start align-items-center ">

     

      <Dropdown title="Product" selectedType={selectedType} bgColor={bgColor} options={dummyProducts}
        isOpen={openDropdown === 'menu1'}
        handleToggle={() => handleDropdownToggle('menu1')}
        handleClick={() => {

        }
        }
      />
      <Dropdown title="Resources" selectedType={selectedType} bgColor={bgColor} options={dummyResources}
        isOpen={openDropdown === 'menu2'}
        handleToggle={() => handleDropdownToggle('menu2')}
        handleClick={() => {

        }
        }
      />
      <Dropdown
        title="Pricing"
        selectedType={selectedType}
        bgColor={""}
        // options={dummyPricing}
        isOpen={openDropdown === 'menu3'}
        dropdown={false}
        handleToggle={() => {

        }}
        handleClick={() => {
          router.push("/pricing");

        }}
      />


      {/* <Dropdown title="About Us" selectedType={selectedType} bgColor={bgColor} options={dummyCompany}
        isOpen={openDropdown === 'menu4'}
        handleToggle={() => handleDropdownToggle('menu4')}
        handleClick={() => {
          setType("company");
          showHidden()
        }
        } /> */}

    </div>

    <div className="d-md-flex  justify-between">

    <div className="d-block d-lg-none  d-flex">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" onClick={() => showHiddenMobile()} aria-expanded="false" aria-label="Toggle navigation">
        <Image src={bgColor ? menuBarsWhite : menuBars} alt="menu" />
      </button>
      {isMobile && <div className="pl-3"><LogoMobile /></div>}
    </div>
    <div className="hidden sm:flex lg:flex tablet_login  tablet_login sm:d-none d-lg-flex">
      <Button style2={{ background: 'transparent', border: 'none' }} className="bg-red-500 login_animation" text='Login' handleClick={() => window.open('https://www.talentspotifyapp.com/login', '_blank')} />
      <Button
        className={`text-white animate_startFree`}
        text='Start for Free'
        style2={{ background: '#083C62', border: 'none' }}
        onClick={() => handleClick()}
      />
      </div>
      </div>
  </div >;
}
