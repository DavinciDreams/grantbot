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

const benefitOne = {
  title: "Unlock Funding Opportunities with Ease and Confidence",
  desc: "Are you tired of spending countless hours researching grant opportunities, only to be overwhelmed by the complex application process?",
  image: benefitOneImg,
  bullets: [
    {
      title: "Simple and Efficient",
      desc: "Do you wish there was a simple and efficient way to navigate the world of grants and secure the funding you need?",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Revolutionary",
      desc: "Grant Bot is here to revolutionize the way you approach grant applications. Say goodbye to the daunting task of sifting through endless websites, deciphering confusing guidelines, and wondering if you've missed out on crucial opportunities. ",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Maximize Success",
      desc: "Grant Bot is your trusted companion, designed to streamline the entire grant application process and maximize your chances of success.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why Choose Grant Bot?",
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
