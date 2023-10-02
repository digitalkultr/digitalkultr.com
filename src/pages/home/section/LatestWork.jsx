import underline from "../../../assets/icon/underline.svg";
import work_image from "../../../assets/img/work_image/studee.png";
import work_image2 from "../../../assets/img/work_image/eddy2.png";

const LatestWork = () => {
  return (
    <>
      <section className="section-latest-work container">
        <div className="row-1">
          <div className="section-title">
            <div className="latest-work-subtitle">Our Futured Work</div>
            <h2 className="latest-work-title">
              We craft digital products and experiences that help businesses <span className="important">thrive.<img src={underline} alt="" /></span>
            </h2>
          </div>
          <article className="latest-work-items items-2">
            <figure className="work-items-2" style={{ margin: 0 }}>
              <img className="work-image" src={work_image2} height="100%" width="100%" />
              <figcaption className="work-caption">
                <h3 className="work-title">Eddy</h3>
                <p className="work-desc">Eddy enables people that receive humanitarian or development aid to share their experiences and shape the type and quality of local services.</p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="row-2">
          <article className="latest-work-items">
            <figure className="work-items" style={{ margin: 0 }}>
              <img className="work-image" src={work_image} height="100%" width="100%" />
              <figcaption className="work-caption">
                <h3 className="work-title">Studee</h3>
                <p className="work-desc">Studee enables people that receive humanitarian or development aid to share their experiences and shape the type and quality of local services.</p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </>
  );
}

export default LatestWork