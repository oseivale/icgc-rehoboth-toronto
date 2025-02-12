import PageWrapper from "@/app/components/page-wrapper";
import { CovenantFamiliesSection } from "@/app/components/sections/programs/covenant-families";



export default function Prayer() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"COVENANT FAMILIES"}>
        <div className="pageContainer">
          <CovenantFamiliesSection />
        </div>
      </PageWrapper>
    </div>
  );
}
