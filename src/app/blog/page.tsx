import PageWrapper from "../components/page-wrapper";
import CardGrid from "../components/sections/blog/articles";

export default function Blog() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <PageWrapper header={"BLOG"}>
        {/* <h1 className="pageContainer">BLOG</h1>  */}
        <CardGrid />
      </PageWrapper>
    </div>
  );
}
