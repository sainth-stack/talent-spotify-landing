import Button from '../Components/Button'
import React from 'react'
import facebook from '../assets/svg/facebook.svg'
import twitter from '../assets/svg/twitter.svg'
import instagram from '../assets/svg/instagram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import youtube from '../assets/svg/youtube.svg'
import { Validator, blogList, companyList, supportList } from '../utilities'
import FooterLogo from '../Components/FooterLogo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'next-i18next';
import { useState } from 'react'
import axios from 'axios'
export default function Footer() {
  const validator = Validator();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [, forceUpdate] = useState(false);
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const changeLanguage = (e) => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value);
  }
  // const router = useRouter();
  // const {locale} = router;
  // const changeLanguage = (e) => {
  //   const locale = e.target.value;
  //   router.push(router.pathname, router.asPath, { locale });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      let response = await axios.post("https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/emailsignup", { email }
      )
      if (response.data.success) {
        setLoading(false);
        setError("");
        //Toast({ message: "Contact Form Submitted Successfully!", type: "success", time: 4000 })
        alert("Email Signup Successful!");
        //clearAll();
        window.location.reload();
      } else {
        setLoading(false);
        setError("Something went wrong in network");
        alert(response.data.message)
        //Toast({ message: "Something went wrong in network", type: "error", time: 4000 })
      }
    } else {
      validator.current.showMessages();
      forceUpdate(true);
    }
  }
  return (
    <div className='bg-grayshadow pt-5 pb-5'>
      <div className='row p-0 m-0'>
        <div className='col-lg-4 pl-5'>
          <h5 className='heading2 pt-0 mt-0'><FooterLogo logoImg='2' /></h5>
          <h5 className='heading2'>Become a People Engagement pro!</h5>
          <p className='signuptext'>Sign up today to receive all the best practices, news and product updates about the world of employee performance management.</p>
          <div className='boxContainer'>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter your email' className='inputBox' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Button text='Subscribe' className='bg-green text-white border-0 subscribeBtn' type="submit" />
              {validator.current.message("Email ", email, "required|email")}
            </form>
          </div>
          <div className='d-flex justify-content-between p-3 mr-4'>
            <a href="https://www.facebook.com/Talentspotify" target="_blank" rel="noreferrer noopener">
              <Image src={facebook} alt="facebook" className='socialIcon' />
            </a>
            <a href="https://twitter.com/TalentSpotify" target="_blank" rel="noreferrer noopener">
              <Image src={twitter} alt="twitter" className='socialIcon' />
            </a>
            <a href="https://www.instagram.com/talentspotify" target="_blank" rel="noreferrer noopener">
              <Image src={instagram} alt="instagram" className='socialIcon' />
            </a>

            <a href="https://www.linkedin.com/company/talentspotify/about" target="_blank" rel="noreferrer noopener">
              <Image src={linkedin} alt="linkedin" className='socialIcon' />
            </a>
            <a href="https://www.youtube.com/channel/UCUng2BIcaPmfwVOryKAAa2A" target="_blank" rel="noreferrer noopener">
              <Image src={youtube} alt="youtube" className='socialIcon' />
            </a>
          </div>
        </div>
        <div className='d-flex col-lg-6'>
          <FooterList heading="Company" list={companyList} />
          <FooterList heading="Blog" list={blogList} />
          {/*<FooterList heading="Support" list={supportList} />
          <FooterList heading="Apps" list={[]} />*/}
        </div>
        {/*<div className='m-3 bg bg-secondary languageDropdown'>
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="bg bg-dark" value="en">EN</option>
            <option className="bg bg-dark" value="fr">FR</option>
            <option className="bg bg-dark" value="tel">TEL</option>
          </select>
        </div>*/}
      </div>
      <div className='row m-3'>
        <div className='col-lg-4 d-flex justify-content-between '>
          <Link href="/termsandconditions"><span className='text-dark fs10 cursor-pointer'> Terms and Conditions</span></Link>
          <Link href="/privacypolicy"><span className='text-dark fs10 cursor-pointer'> Privacy Policy</span></Link>
          <Link href="/#"><span className='text-dark fs10 cursor-pointer'> Compliance</span></Link>
        </div>
        <div className='col-lg-8 d-flex justify-content-end'>
          <a href="!#" className='text-dark fs10'>People Mesh, Inc. | All rights reserved.</a>
        </div>
      </div>
    </div>
  )
}

const FooterList = ({ list = [], heading }) => {
  return (
    <div className='col-lg-4'>
      <h5 className='heading3 pb-2'>{heading}</h5>
      {list.length > 0 && list.map((item, index) => (
        <Link href={item.path} className='text-dark cursor-pointer' key={index}><p key={index} className="link-item cursor-pointer">{item.key}</p></Link>
      ))}
    </div>
  )
}