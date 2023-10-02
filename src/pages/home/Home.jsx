import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer";
import Hero from "./section/Hero";
import LatestWork from "./section/LatestWork";
import Approach from "./section/Approach";
import SmoothScroll from "../../components/SmoothScroll";
const Home = () => {
  return (
  <>
  <Navbar/>
  <SmoothScroll>
    <main>
      <Hero/>
      <LatestWork/>
      <Approach/>
    </main>
  </SmoothScroll>
  </>  
  );
}
 
export default Home;