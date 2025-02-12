import PageWrapper from "@/app/components/page-wrapper";
import { PrayerSection } from "@/app/components/sections/programs/prayer";



export default function Prayer() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"PRAYER SESSIONS"}>
        <div className="pageContainer">
          <PrayerSection />
        </div>
      </PageWrapper>
    </div>
  );
}
