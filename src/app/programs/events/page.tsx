import PageWrapper from "../../components/page-wrapper";
import EventsPage from "../../components/sections/events/calendar";

export default function Events() {
  return (
    <div style={{ paddingTop: "5rem" }}>
     
        <PageWrapper header={"EVENTS"}>
        <div className="pageContainer">

          <EventsPage />
          </div>
        </PageWrapper>
     
    </div>
  );
}
