import illu_1 from "../../../assets/img/illu_header_1.png"
import illu_2 from "../../../assets/img/illu_header_2.png"
import illu_3 from "../../../assets/img/illu_header_3.png"

const Hero = () => {
  return (
    <section className="hero-section container">
      <div className='hero-heading'>
        <h1 className='hero-text'>
          We are <span className="inline-illu">digitalkultr <img className="illu-header" src={illu_1}/></span>, agency based in Bandung. We crafts digital <span className="inline-illu">experience <img className="illu-header"src={illu_2}/></span> <span className="inline-illu"><img className="illu-header" src={illu_3}/>for people we love</span>
        </h1>
      </div>
    </section>
  );
}
export default Hero;