import React, {useRef} from 'react';
import { useScroll, useTransform, motion as m } from "framer-motion"

import underline from "../../../assets/icon/underline.svg" 
import hero_1 from "../../../assets/img/hero-image/hero-1.png"
import hero_2 from "../../../assets/img/hero-image/hero-2.png"
import hero_3 from "../../../assets/img/hero-image/hero-3.png"
import hero_4 from "../../../assets/img/hero-image/hero-4.png"
import hero_5 from "../../../assets/img/hero-image/hero-5.png"

const Hero = () => {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start "]
  });

  let pAni1 = useTransform(scrollYProgress, [0,1], ["0%", "75%"]);
  let pAni2 = useTransform(scrollYProgress, [0,1], ["0%", "20%"]);
  let pAni3 = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);
  let pAni4 = useTransform(scrollYProgress, [0,1], ["0%", "10%"]);
  let pAni5 = useTransform(scrollYProgress, [0,1], ["0%", "35%"]);

  return (
    <section ref={ref} className="hero-section container">
      <h1 className="hero-text">
        At digitalkultr, we crafts digital experiences for people we care and love.
      </h1>
      <m.figure style={{y:pAni1}} className="hero-image-pollaroid image-1">
        <img src={hero_1} width="100%" height="100%"/>
      </m.figure>
      <m.figure style={{y:pAni2}} className="hero-image-pollaroid image-2">
        <img src={hero_2} width="100%" height="100%"/>
      </m.figure>
      <m.figure style={{y:pAni3}} className="hero-image-pollaroid image-3">
        <img src={hero_3} width="100%" height="100%"/>
      </m.figure>
      <m.figure style={{y:pAni4}}className="hero-image-pollaroid image-4">
        <img src={hero_4} width="100%" height="100%"/>
      </m.figure>
      <m.figure style={{y:pAni5}} className="hero-image-pollaroid image-5">
        <img src={hero_5} width="100%" height="100%"/>
      </m.figure>
    </section>
  );
}

export default Hero;