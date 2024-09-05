import Image from 'next/image'
import image1 from '../../assets/svg/image1.svg'
import image2 from '../../assets/svg/image2.svg'
import image4 from '../../assets/svg/image4.svg'
import image7 from '../../assets/svg/image7.svg'
import checkbox from '../../assets/svg/checkbox.svg'
import Button from '../Button'
import Link from 'next/link'
import { list1N, list11N, list2N, list21N, list31N, list32N, list41N, list42N, listHN } from '../../utilities'

export const OKR = (props) => {
  const data = [
    {
      heading: "AI-powered OKR Management",
      image: image1,
      list1: "Integrated with AI and ML technology, TalentSpotify's platform gives you the birds eyes view of your team's chosen objectives and the detailed clarity to identify early errors and risks, and predict success of your Key Results.",
      list2: list2N
    },
    {
      heading: "Agile Business Execution",
      image: image4,
      list1: `Get your teamwork organised and optimized by breaking down each project components - creating, updating and tracking progress - from one place. You benefit from all the extra time-consuming blocks removed and a smooth communication of appropriate information.`,
      list2: list42N
    },
    {
      heading: "Gamified Rewards and Recognition",
      image: image2,
      list1: `Our gamified version of Rewards and Recognition brings in an element of fun, gives your teams monetary and non-monetary rewards, allows you to celebrate your employees' efforts and improves the overall engagement and satisfactions levels of your workforce.`,
      list2: list32N
    },
    {
      heading: "Objective and Insightful Employee Review",
      image: image7,
      list1: `Traditional employee review and feedback mechanisms are less effective in the long-term.
            With TalentSpotify you get the flexibility of a comprehensive competency review questionnaires to choose from and the objectivity in the feedback report for your employees.`,
      list2: list21N
    },
    {
      heading: "How it works?",
      image: null,
      list1: null,
      list2: listHN,
      button: true
    }
  ]
  return (
    <div ref={props.forwardRef}>
      {
        data.map((item, index) => {
          return (
            <div key={index} style={{
              background: '#EDF8F7',
              borderRadius: "12px",
              boxShadow: ' 0px 4px 4px 0px #0000000D',
              padding: '15px 10px',
              marginBottom: '20px'
            }}>
              <h2 style={{ fontFamily: 500, fontSize: '18px', lineHeight: '27px', color: '#2A8881' }}>
                {item.heading}
              </h2>
              {item.image ? <Image src={item.image} style={{ p: 0, m: 0 }} alt="item icon" /> : <div className="embed-responsive embed-responsive-16by9 monetary">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
              </div>}
              {item.list1 && <p style={{ fontFamily: "Poppins", fontSize: "12px", lineHeight: '20px', fontWeight: 400, color: '#000000' }}>
                {item.list1}
              </p>}
              <ul style={{ listStyle: !item.button ? "initial" : "", padding: 0, margin: 0, marginTop: '10px', paddingLeft: "15px" }} className='mobilcheck'>
                {item.list2.map((item, index) => {
                  return <div className='d-flex' key={index}>
                    <li style={{ fontSize: '12px', lineHeight: "18px", fontWeight: 400, fontFamily: "Poppins" }}>{item}</li>
                  </div>
                })}
              </ul>
              <div className={!item.button ? 'd-flex justify-content-end' : 'd-flex justify-content-center'}>
                {!item.button ? <Link href={""} style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}><Button text="Learn more" className="border-grey bg-white text-grey font-weight-bold" /></Link> :
                  <Button
                    className="border-0 bg-green text-white mt-4 w-90 pl-3 pr-3"
                    style={{ width: '361px', display: "flex", justifyContent: 'center', padding: '30px' }}
                    text="Start FREE Trial & Consultancy"
                  // handleClick={() => showFreeTrail()}
                  />
                }
              </div>                      </div>
          )
        })
      }
    </div>
  )
}