import okrIcon from "../assets/images/new-dashboard/nav1.svg";
import rewardsIcon from "../assets/images/new-dashboard/nav2.svg";
import recognitionIcon from "../assets/images/new-dashboard/nav3.svg";
import reviewsIcon from "../assets/images/new-dashboard/nav4.svg";
import blogIcon from "../assets/images/new-dashboard/nav5.svg";
import webinarsIcon from "../assets/images/new-dashboard/nav6.svg";
import careersIcon from "../assets/svg/careersIcon.svg";
import pressIcon from "../assets/svg/pressIcon.svg";
import contactusIcon from "../assets/svg/contactusIcon.svg";
import emptyBox from "../assets/svg/emptyBox.svg";

export const WRONG_PASSWORD =
  "Password must contain 1 Alphabet, 1 Special Character, 1 Number. Min 8 and Max 16 character length only allowed.";
export const WRONG_EMAIL = "must be a valid Email.";
export const WRONG_PHONE = "must be a valid Phone Number.";


export const Region = [
  { key: "Please Select", label: "Please Select", value: "" },
  { key: "Americans", label: "Americans", value: "Americans" },
  { key: "Asia Pacific", label: "Asia Pacific", value: "Asia Pasific" },
  { key: "Europe", label: "Europe", value: "Europe" },
  { key: "Middel East & Africa", label: "Middel East & Africa", value: "Middel East & Africa" },

]
export const Organization = [
  { key: "Please Select", label: "Please Select", value: "" },
  { key: "<50 employees", label: "<50 employees", value: "<50 employees" },
  { key: "50-200 employees", label: "50-200 employees", value: "50-200 employees" },
  { key: "200-1000 employees", label: "200-1000 employees", value: "200-1000 employees" },
  { key: "1000+ employees", label: "1000+ employees", value: "1000+ employees" },

]


export const dummyData = [
  { key: "Product", label: "Product", value: "Product" },
  { key: "Product2", label: "Product2", value: "Product2" },
]

/* export const dummyPricing = [
  { key: "Pricing", label: "Pricing", value: "pricing", path: "/pricing" },
] */
export const dummyCompanyNav = [
  { key: "About Us", label: "About Us", value: "aboutus", icon: rewardsIcon, path: "/aboutus" },
  { key: "Careers", label: "Careers", value: "careers", icon: careersIcon, path: "/careers" },
  { key: "Press", label: "Press", value: "press", icon: pressIcon, path: "/press" },
  { key: "Contact Us", label: "Contact Us", value: "contactus", icon: contactusIcon, path: "/contactus" },
]
export const dummyApproachNav = [
  { key: "Why It Works", label: "Why It Works", value: "whyitworks", icon: webinarsIcon, path: "/whyitworks" }, ,
]
export const dummyCompany = [
  { key: "About Us", label: "About Us", value: "aboutus" },
  { key: "Contact Us", label: "Contact Us", value: "contactus" },
  { key: "Careers", label: "Careers", value: "careers" },
  { key: "Terms and Conditions", label: "Terms and Conditions", value: "termsandconditions" },
  { key: "Privacy Policy", label: "Privacy Policy", value: "privacypolicy" },
]
export const dummyResources = [
  { key: "Blog", label: "Blog", value: "blog", icon: blogIcon, path: "/blog" },
  { key: "Webinars", label: "Webinars", value: "webinars", icon: webinarsIcon, path: "/webinars" },
  //{ key: "OKR Examples", label: "OKR Examples", value: "okr", icon: okrExampleIcon,path:"/okr" },
]
export const dummyProducts = [
  { key: "OKR", label: "OKR", value: "okr", icon: okrIcon, path: "/okr" },
  { key: "Rewards", label: "Rewards", value: "rewards", icon: rewardsIcon, path: "/rewards" },
  { key: "Recognition", label: "Recognition", value: "recognition", icon: recognitionIcon, path: "/recognition" },
  { key: "Reviews", label: "Reviews", value: "reviews", icon: reviewsIcon, path: "/reviews" },
  //{ key: "SWOT", label: "SWOT", value: "swot", icon: swotIcon,path:"/swot" },
]
export const list1 = [
  "Our OKRs align easily, and bridge your strategy-execution gap.",
  "Take advantage of this powerful goal-setting framework with benefits like:"
]

export const list2 = [
  "Encourage company wide collaboration and bottom up communication",
  "Agile alignment",
  "Faster adaptation and execution",
  "Guided weekly check-ins",
]

export const list11 = [
  "Boost employee performance with customizable features to track and monitor",
  "Build a high performance workplace culture with benefits like:"
]

export const list21 = [
  "Efficient Performance Appraisal Management",
  "High-performance work culture",
  "Talent identification and nurturing"
]

export const list31 = [
  "Engagement with a peer-based award and recognition program",
  "Strengthen employee engagement and measure satisfaction with these key features:"
]

export const list32 = [
  "Employee awards points",
  "Pulse surveys",
  "Company news feed"
]


export const list41 = [
  "Make your team’s work more efficient with our intuitive Task Management Software",
  "Connect day-to-day work to higher order company goals and harvest benefits like:"
]

export const list42 = [
  "Workflows aligned with goals",
  "Organized teamwork",
  "Streamlined Project Execution"
]

export const list1N = [
  "Use Extensive OKR Library",
  "Predict success of your Key Results",
  "Get a bird’s eye view of your Team",
]

export const list2N = [
  "Extensive OKR library",
  "AI-powered success predictor for Key Results",
  "Bird's eye view of OKRs",
]

export const list31N = [
  "Our gamified version of Rewards and Recognition", "brings in an element of fun, gives your teams", "monetary and non-monetary rewards, allows you to", "celebrate your employees' efforts and improves the", "overall engagement and satisfactions levels of your workforce."
]

export const list32N = [
  "Efficient Performance Appraisal Management",
  "High-performance work culture",
  "Talent identification and nurturing"
]

export const list11N = [
  "Traditional employee review and feedback", "mechanisms are less effective in the long-term.", "With TalentSpotify you get the flexibility of a", "comprehensive competency review questionnaires", "to choose from and the objectivity in the feedback", "report for your employees."
]

export const list21N = [
  "Scientifically-backed, measurable competency questionnaires",
  "AI assisted chat-based review process",
  "Personalized feedback report and coaching plans"
]


export const list41N = [
  "Get your teamwork organised and optimized by", "breaking down each project components - creating,", "updating and tracking progress - from one place.",
  "You benefit from all the extra time-consuming blocks", "removed and a smooth communication of", "appropriate information."
]

export const list42N = [
  "Systematic project execution",
  "Manage team workflows",
  "Task completion linked to reward prizes"
]

export const list51 = [
  "We provide AI based employee SWOT analysis and Team SWOT analysis along with eNPS."
]

export const list52 = [
  "Advantages of this analysis includes",
  "Better Retention Strategy",
  "Formulate strategy to improve team productivity"
]
export const listHN = [
  "No credit card required",
  "2-weeks FREE trial",
  "3 FREE consultancy session from employee management experts"
]

export const list62 = [
  "TalentSpotify helps you to create a custom reward catalogue to delight employees and reaffirm company values.",
  "Leverage a global catalog with lot of redemption options, zero markups, and instant delivery.",
  "Let them choose from gift cards, experiences, perks, subscriptions, merchandise, wellness, and more.."

]
export const list63 = [
  `<b>64%</b> of employees feel they do not have strong work culture`,
  `<b>51%</b> of employees are actively looking for new job or watching for openings`,
  "Gallup estimates that only 1 out of every 3 workers have received recognition or praise for good work in the last seven days.",
  `<b>50%</b> of employees believe being thanked by managers not only improved their relationship but also built trust with their higher-ups.`

]

export const companyList = [
  { key: "About Us", path: "/aboutus" },
  //{ key: "Product", path: "" },
  //{ key: "In the Press", path: "" },
  //{ key: "Partnership", path: "" },
  //{ key: "SLA", path: "" },
  //{ key: "Data Security", path: "" },
  { key: "Terms of Service", path: "termsandconditions" },
  { key: "Privacy Policy", path: "privacypolicy" },
  { key: "Pricing", path: "pricing" },
  { key: "Webinars", path: "webinars" },
]

export const blogList = [
  //{ key: "OKR University", path: "" },
  //{ key: "KPIs Library", path: "" },
  //{ key: "Performance Management", path: "" },
  //{ key: "Power of the Letter P", path: "" },
  //{ key: "Behavioral Economics", path: "" },
  { key: "Blog", path: "blog" },
  //{ key: "OKR Examples", path: "okr" },
  //{ key: "Integrations", path: "" },
  //{ key: "SWOT", path: "swot" },
  { key: "Reviews", path: "reviews" },
  { key: "Rewards", path: "rewards" },
  { key: "Recognition", path: "recognition" },
  // { key: "Login", path: "https://talent-spotify-frontend-git-master.vercel.app/" },
]

export const supportList = [
  { key: "SUPPORT", path: "" },
  { key: "Contact Us", path: "" },
  { key: "CanvasHelp", path: "" },
  { key: "CenterIterate Faster", path: "" },
  { key: "Coaching", path: "" },
]