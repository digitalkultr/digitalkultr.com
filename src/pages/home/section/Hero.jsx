import illu_1 from "../../../assets/img/illu_header_1.png"
import illu_2 from "../../../assets/img/illu_header_2.png"
import illu_3 from "../../../assets/img/illu_header_3.png"
import { motion as m } from 'framer-motion'


const Hero = () => {

  const textRow1 = "We Are digitalkultr"
  const textRow2 = "a digital agency based in Bandung."
  const textRow3 = "We craft digital experience"
  const textRow4 = "for the people we care & love."

  const wordAni = {
    hidden: { y: "100%"},
    visible: (i) => ({
      y: "0%",
      transition: {duration: 0.5, delay: 0.1 * i}
    }),
  }
  

  return (
    <section className="hero-section container">
      <h1 className='hero-text'>
        <div className="hero-text-row">
          {
            textRow1.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}</m.span></span>
            })
          } <img className="illu-header" src={illu_1} />
        </div>
        <div className="hero-text-row">
          {
            textRow2.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}</m.span></span>
            })
          }
        </div>
        <div className="hero-text-row">
          {
            textRow3.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}</m.span></span>
            })
          }
          <img className="illu-header" src={illu_2} />
        </div>
        <div className="hero-text-row">
          <img className="illu-header" src={illu_3} />
          {
            textRow4.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}</m.span></span>
            })
          }
        </div>
      </h1>
    </section>
  );
}
export default Hero;