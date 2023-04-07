import "../../app.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Stats from "../Stats";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Stats></Stats>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default Home;
