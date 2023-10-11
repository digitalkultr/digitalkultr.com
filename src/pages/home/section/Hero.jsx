import illu from "../../../assets/img/illu.png"
import { motion as m } from 'framer-motion'


const Hero = () => {

  const textRow1 = "We're digitalkultr, a digital agency crafting digital experiences for the ones we cherish."

  const wordAni = {
    hidden: { y: "100%" },
    visible: (i) => ({
      y: "0%",
      transition: { duration: 0.4, delay: 0.09 * i }
    }),
  }


  return (
    <section className="hero-section container">
      <div className='hero-text-container'>
        <h1 data-srcroll data-scroll-speed="0.3" className="hero-text">
          {
            textRow1.split(" ").map((word, index) => {
              return <div key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}&nbsp;</m.span></div>
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