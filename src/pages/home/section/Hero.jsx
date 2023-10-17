import React, { useEffect, useState } from "react"
import { motion as m } from "framer-motion"

import illu from "../../../assets/img/illu.png"

const Hero = () => {

  const heroText = "We're digitalkultr, a digital agency crafting digital experiences for the ones we cherish."

  const wordAni = {
    hidden: { y: "100%" },
    visible: (i) => ({
      y: "0%",
      transition: { duration: 0.4, delay: 0.09 * i }
    }),
  }

  // Scrolled-to Function
  const [scrolledClass, setScrolledClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', fadeScroll);
    return () => window.removeEventListener('scroll', fadeScroll);
  }, []);

  const fadeScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setScrolledClass('is-scrolled') : setScrolledClass('');
    }
  };

  return (
    <section className="hero-section container">
      <div className='hero-text-container'>
        <h1 data-srcroll data-scroll-speed="0.3" className="hero-text">
          {
            heroText.split(" ").map((word, index) => {
              return <div key={index} className="word-mask"><m.span className="word" variants={wordAni} initial="hidden" animate="visible" custom={index}>{word}&nbsp;</m.span></div>
            })
          }
        </h1>
      </div>
      <div className="illu-container">
        <img data-scroll data-scroll-speed="0.1" src={illu} className="illu" />
      </div>
      <div className={`cta-container ${scrolledClass}`}  >
        <a data-scroll data-scroll-speed="0.2" className="cta-header">Explore playground</a>
      </div>
    </section>
  );
}
export default Hero;