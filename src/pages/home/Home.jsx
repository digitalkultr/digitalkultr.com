import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer";
import Hero from "./section/Hero";
// import LatestWork from "./section/LatestWork";
// import Approach from "./section/Approach";
// import SubFooter from "./section/Subfooter";

const Home = () => {
  return (  
  <>
    <Navbar/>
    <main>
      <Hero/>
    </main>
  </>
  );
}
 
export default Home;