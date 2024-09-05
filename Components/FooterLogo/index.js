import Image from "next/image";
import React from "react";
import Link from "next/link";
import appLogo1 from "../../assets/images/appLogo.jpg";
import logo2 from "../../assets/images/logo2.png";
// import "./styles.scss";

export default function FooterLogo({ logoImg = "1" }) {
  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="d-flex align-items-center">
          <Image
            src={logoImg === "2" ? logo2 : appLogo1}
            className="appLogo"
            alt="applogo"
          />
          &nbsp;&nbsp;
          <p className="text-dark logoText">
            <span className="talent2">TALENT</span>
            <span className="spotify2">SPOTIFY</span>
          </p>
        </div>
      </a>
    </Link>
  );
}
