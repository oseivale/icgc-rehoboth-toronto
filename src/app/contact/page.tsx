import PageWrapper from "../components/page-wrapper";
import ContactUs from "../components/sections/contact/contact-us";

export default function Contact() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"CONTACT US"}>
        <ContactUs />
        {/* <h1 className="pageContainer">CONTACT</h1> */}
      </PageWrapper>
    </div>
  );
}
