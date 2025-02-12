import PageWrapper from "@/app/components/page-wrapper";
import { BibleStudySection } from "@/app/components/sections/programs/bible-study";

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
