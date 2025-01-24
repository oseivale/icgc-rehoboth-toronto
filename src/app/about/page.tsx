import PageWrapper from "../components/page-wrapper";
import CoreValuesAccordion from "../components/sections/about/foundations-of-faith";
import CommunityTabs from "../components/sections/about/mission-vision-story";
import MessageFromPastor from "../components/sections/about/pastor-message";
import LivingOurFaith from "../components/sections/about/what-we-do";
import SermonsSection from "../components/sections/home/latest-sermons";

export default function About() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={'ABOUT US'}>
        <MessageFromPastor />
        <LivingOurFaith />
        <CommunityTabs />
        <CoreValuesAccordion />
        <SermonsSection />
      </PageWrapper>
      {/* <h1 className="pageContainer">
       
      </h1> */}
    </div>
  );
}
