import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Grant Bot Landing Page</title>
        <meta
          name="description"
          content="Introducing Grant Bot: Your Ultimate Guide to Grant Applications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Grant Bot Benefits"
        title=" Why choose Grant Bot?">
Are you tired of spending countless hours researching grant opportunities, only to be overwhelmed by the complex application process? Do you wish there was a simple and efficient way to navigate the world of grants and secure the funding you need? Look no further! Grant Bot is here to revolutionize the way you approach grant applications.      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Sign up for Grant Bot">
       Sign up for Grant Bot now and embark on your journey towards funding success. Start streamlining your grant application process, accessing personalized recommendations, and taking control of your organization's future. Let Grant Bot be your trusted guide as you navigate the world of grants with confidence and ease.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      Don't miss out on the funding opportunities that can turn your vision into reality. 
      With Grant Bot, you can unlock the potential of grants and propel your organization forward. 
      Experience the future of grant applications today!
      </SectionTitle>
      <Testimonials />
      <SectionTitle 
        pretitle="FAQ" 
        title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;