import HeroBanner from "./components/hero-banner";
import MarqueeBanner from "./components/marquee";


export default function Home() {
  return (
    <div>
      {/* <h1 className="pageContainer">HOME</h1> */}
      <HeroBanner />
      <MarqueeBanner/>
    </div>
  );
}
