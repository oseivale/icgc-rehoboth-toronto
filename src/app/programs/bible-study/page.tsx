import PageWrapper from "@/app/components/page-wrapper";
import Accordion from "@/app/components/sections/programs/bible-resources";
import { BibleStudySection } from "@/app/components/sections/programs/bible-study";
import { CovenantFamiliesSection } from "@/app/components/sections/programs/covenant-families";
import BibleStudyPage from "@/app/components/sections/programs/example-page";
import SermonsSection from "@/app/components/sections/programs/latest-sermons";
import { MidweekSection } from "@/app/components/sections/programs/mid-week";
import { MinistriesSection } from "@/app/components/sections/programs/ministries";
import Sidebar from "@/app/components/sections/programs/sidebar";

export default function BibleStudy() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"BIBLE CONNECT"}>
        <div>
          <div className="">
            {/* <Sidebar /> */}
            <BibleStudySection />
          </div>

          {/* <BibleStudyPage /> */}

          {/* <Accordion />  */}
          {/* <SermonsSection /> */}
        </div>
      </PageWrapper>
    </div>
  );
}
