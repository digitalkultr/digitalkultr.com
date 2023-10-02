import venn_image from "../../../assets/img/venn.svg"

const Approach = () => {
  return (
    <>
      <section className="container">
        <div className="approach-section">
          <div className="approach-row-1">
            <img src={venn_image} width="100%"></img>
          </div>
          <div className="approach-row-2">
            <h3 className="approach-title">
              We build Partnership and Value collaboration with passion
            </h3>
            <p>01. Ask anyone, we love what we do. We care about our work and we’ve proven our capability to deliver satisfying results, helping clients to grow, gain and retain customers.</p>
            <p>02. Each project is different and needs a flexible approach. We adapt our processes to your specific needs and the people we work with to add value early on.</p>
            <p>03. That’s why close collaboration, exchanging ideas, and the desire to learn are fundamental in our way of working. It allows us to efficiently think of practical solutions for complex challenges.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Approach;