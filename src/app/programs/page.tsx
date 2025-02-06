import PageWrapper from "../components/page-wrapper";
import { ChurchDepartmentsSection } from "../components/sections/programs/church-departments";
import { CovenantFamiliesSection } from "../components/sections/programs/covenant-families";
import { MidweekSection } from "../components/sections/programs/mid-week";
import { MinistriesSection } from "../components/sections/programs/ministries";

export default function Programs() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"PROGRAMS"}>
        <div className="pageContainer">
          <MinistriesSection />
          <MidweekSection />
          <CovenantFamiliesSection />
        </div>
      </PageWrapper>
    </div>
  );
}
