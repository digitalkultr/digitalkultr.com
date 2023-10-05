import { useRef, useLayoutEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero_Image1 from "../../../assets/img/hero-image/hero_image_1.webp" 

const Hero = () => {

  const firstText = useRef ()
  const secondText = useRef ()
  const slider = useRef();

  const firstText2 = useRef ()
  const secondText2 = useRef ()
  const slider2 = useRef();
  
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.015,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
    requestAnimationFrame(animate2);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.015 * direction;
  }
  const animate2 = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText2.current, {xPercent: xPercent})
    gsap.set(secondText2.current, {xPercent: xPercent})
    requestAnimationFrame(animate2);
    xPercent += 0.005 * direction;
  }

  return (
    <section className="hero-section">
      <div className='hero-text-container'>
        <div ref={slider} className="hero-text-row">
          <h1 ref={firstText} className="hero-text">We Are Digitalkultr. We Craft Digital Experiences.</h1>
          <span ref={secondText} className="hero-text">We Are Digitalkultr. We Craft Digital Experiences.</span>
        </div>
      </div>
      <div className='hero-text-container'>
        <div ref={slider2} className="hero-text-row">
          <h1 ref={firstText2} className="hero-text">We Are Digitalkultr. We Craft Digital Experiences.</h1>
          <span ref={secondText2} className="hero-text">We Are Digitalkultr. We Craft Digital Experiences.</span>
        </div>
      </div>
      <figure data-scroll data-scroll-speed="0.5" className="collage-container image-1">
        <img height="100%" width="100%" src={Hero_Image1} className="hero-image" alt="Digital Kultur Team Working" />
        <figcaption>When We Are Working 👋</figcaption>
      </figure>
      <figure data-scroll data-scroll-speed="0.6" className="collage-container image-2">
        <img height="100%" width="100%" src={Hero_Image1} className="hero-image" alt="Digital Kultur Team Working" />
        <figcaption>When We Are Working 👋</figcaption>
      </figure>
      <figure data-scroll data-scroll-speed="0.4" className="collage-container image-3">
        <img height="100%" width="100%" src={Hero_Image1} className="hero-image" alt="Digital Kultur Team Working" />
        <figcaption>When We Are Working 👋</figcaption>
      </figure>
    </section>
  );
}
export default Hero;