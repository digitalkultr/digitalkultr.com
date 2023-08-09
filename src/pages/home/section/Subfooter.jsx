import underline from "../../../assets/icon/underline.svg" 

const SubFooter = () => {
  return ( 
    <section className="container">
      <div className="subfooter-section">
        <div className="row-1">
          <h3 className="subfooter-heading">Have a project in mind? ✴︎ </h3>
          <h3 className="subfooter-heading">Let&apos;s <span className="accent"> work together! <img src={underline} alt=""/></span></h3>
        </div>
      </div>
      <div className="link-list-subfooter">
        <a className="link">hello@digitalkultr.com</a>
        <a className="link">Instagram</a>
        <a className="link">Youtube</a>
      </div>
    </section>
  );
}
 
export default SubFooter;