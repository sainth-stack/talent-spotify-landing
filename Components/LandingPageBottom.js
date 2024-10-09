import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import award1 from "../assets/images/new-dashboard/award1.png";
import award2 from "../assets/images/new-dashboard/award2.png";
import award3 from "../assets/images/new-dashboard/award3.png";
import award4 from "../assets/images/new-dashboard/award4.png";
import award5 from "../assets/images/new-dashboard/award5.png";
import award6 from "../assets/images/new-dashboard/award6.png";

const LandingPageBottom = () => {
  const mediaCards = [
    {
      image: award1,
      heading: "National HR Excellence Awards 24",
      subHeading: "Tata Consultancy Services recognized at the National HR Excellence Program",
      link: "https://www.linkedin.com/posts/talentspotify_employeeengagement-hrawards-innovation-activity-7236591265268572160-0gk5?utm_source=share&utm_medium=member_desktop"
    },
    {
      image: award2,
      heading: "STPI Disburses Seed Fund",
      subHeading: "Submissions pouring in for businesses and startups looking for seed funding",
      link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/"
    },
    {
      image: award3,
      heading: "The Great Leaders Magazine",
      subHeading: "Featuring inspiring and influential HR leaders from across the world",
      link: "https://gcpit.org/the-great-leaders-aug-2024-v09/"
    },
    {
      image: award4,
      heading: "Getting AI Into HR",
      subHeading: "Innovative methods in artificial intelligence transforming HR practices",
      link: "https://www.viscan.in/getting-ai-into-hr/"
    },
    {
      image: award5,
      heading: "Fast-growing HR startups",
      subHeading: "Rapidly scaling HR tech startups leading innovation in the field",
      link: 'https://www.peoplematters.in/article/entrepreneurship-start-ups/fast-growing-hr-and-worktech-startups-to-track-at-people-matters-techhr-singapore-2022-34886 '
    },
    {
      image: award6,
      heading: "Startup Story Media",
      subHeading: "Innovative solutions by renowned startup leaders and HR tech entrepreneurs",
      link: "https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/"
    }
  ];



  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "-10px", right: "10px" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "-40px", right: "50px" }}
        onClick={onClick}
      > </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Adjust speed to a more appropriate value
    slidesToShow: 4,
    slidesToScroll: 4,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,          // Enable auto-scrolling
    autoplaySpeed: 3000,     // Set the speed for auto-scrolling (in milliseconds)
  };

  return (
    <div className='landing-page-bottom'>
      <h3 className="landing-page-bottom__heading">
        <span>Awards and Media Coverage</span>
      </h3>
      <div className='p-2 pb-5'>
        <Slider {...settings}>
          {mediaCards.map((mediaCard, index) => (
            <div key={index} className=''>
              <div className="media-card">
                <div className="media-card__image-container">
                  <Image src={mediaCard.image} alt="Card image" layout="intrinsic" className="media-card__image" />
                </div>

                <div className="media-card__content">
                  <p className="media-card__heading">{mediaCard.heading}</p>
                  <p className="media-card__subheading">{mediaCard.subHeading}</p>
                  <div className="media-card__link">
                    <a href={mediaCard?.link} target="_blank" rel="noopener noreferrer">
                      View more &#62;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingPageBottom;
