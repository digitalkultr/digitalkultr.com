import illu from "../../../assets/img/illu.png"
import AnimatedText from "../../../components/AnimatedText"


const Hero = () => {


  const placeholderText = [
    { type: "span", text: "We're " },
    { type: "special1", text: "digitalkultr" },
    { type: "span",text: " a digital agency crafting"},
    { type: "special2", text: "digital experiences" },
    { type: "span", text: "for the ones we cherish." },
  ];


  return (

<section className="hero-section container">
      <div className='hero-text-container'>
        <h1 data-srcroll data-scroll-speed="0.3" className="hero-text">
          {
            placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })
          }
        </h1>
      </div>
      <div className="illu-container">
        <img data-scroll data-scroll-speed="0.1" src={illu} className="illu" />
      </div>
      <div className="cta-container" >
        <a data-scroll data-scroll-speed="0.2" className="cta-header">Explore playground</a>
      </div>
    </section>
  );
}
export default Hero;