import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitTwo = {
  title: "Unlock Funding Opportunities with Ease and Confidence",
  desc: "Say goodbye to the daunting task of sifting through endless websites, deciphering confusing guidelines, and wondering if you've missed out on crucial opportunities. Grant Bot is your trusted companion, designed to streamline the entire grant application process and maximize your chances of success.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert Guidance",
      desc: "Grant Bot is like having a team of experienced grant writers by your side. Benefit from our vast knowledge base and best practices, honed from years of successful grant applications. We provide helpful tips, templates, and examples to guide you through the process, giving you the confidence to submit compelling proposals.Do you wish there was a simple and efficient way to navigate the world of grants and secure the funding you need?",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Save Time and Resources",
      desc: "Time is precious, and Grant Bot values your efficiency. By automating repetitive tasks and providing ready-to-use templates, Grant Bot enables you to complete applications in record time. Spend more time focusing on your mission and less time on paperwork, knowing that Grant Bot has your back.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Track Progress and Deadlines",
      desc: "Grant Bot keeps you organized and on track. Our integrated calendar and progress tracking feature ensure you never miss a deadline. Stay informed about upcoming opportunities, important milestones, and submission dates, all in one centralized location.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitOne = {
  title: "Unlock Funding Opportunities with Ease and Confidence",
  desc: "Unlock Funding Opportunities with Ease and Confidence Using Grant Bot",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Simplify Grant Research",
      desc: "Grant Bot empowers you with comprehensive access to a vast database of funding opportunities. Say goodbye to hours spent searching for grants online. Our intelligent algorithms identify relevant grants based on your organization's mission, goals, and eligibility criteria. With Grant Bot, you'll discover a world of possibilities right at your fingertips.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Personalized Recommendations",
      desc: "Grant Bot understands that every organization is unique. Tailored to your specific needs, our intelligent platform recommends grants that align with your objectives and increase your chances of success. Save time and energy by focusing on opportunities that truly matter to you.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Streamline Applications",
      desc: "Grant applications can be overwhelming, but Grant Bot simplifies the process. Our intuitive interface guides you through each step, ensuring you never miss a crucial detail. From gathering required documents to crafting compelling narratives, Grant Bot provides the framework you need to create standout applications.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
