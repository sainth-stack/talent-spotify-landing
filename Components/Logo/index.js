import React from "react";
import Link from "next/link";
import LogoBlack from "../../assets/logos/LogoBlack.svg";
import LogoWhite from "../../assets/logos/LogoWhite.svg";
import Image from "next/image";

export default function Logo({ logoImg = "1", textColor }) {
  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="d-flex align-items-center">
          <Image
            src={logoImg === "2" && !textColor ? LogoBlack : LogoBlack}
            //width={70}
            //height={60}
            alt="applogo"
          />
          {/*&nbsp;&nbsp;
          <p className={`logoText mt-3 ${textColor ? 'text-white' : 'text-dark'}`}>
            <span className="talent">TALENT</span>
            <span className="spotify">SPOTIFY</span>
          </p>*/}
        </div>
      </a>
    </Link>
  );
}
