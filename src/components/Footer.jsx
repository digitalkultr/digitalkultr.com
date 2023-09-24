const Footer = () => {
  return (
    <footer className="container footer">
      <p className="subfooter-title">Let's Work Together!</p>
      <div className="footer-menu">
        <div className="row-1">
          <div className="row-title">Let's Talk</div>
          <a className="email-footer" href="mailto:hello@digitalkultr.com">hello@digitalkultr.com</a>
        </div>
        <div className="row-2">
          <div className="row-title">Based on</div>
          <div className="row-items">Bandung, IDN</div>
        </div>
        <div className="row-3">
          <div className="row-title">Our Socials</div>
          <div className="social-menu">
            <div className="row-items">@Youtube</div>
            <div className="row-items">@Instagram</div>
          </div>
        </div>
      </div>
      <div className="footer-devider" />
      <div className="footer-section">
        <div className="copyright">
          © Digitalkultr 2022. All rights reserved.
        </div>
        <div className="policy">
          <a className="link">Privacy Policy</a>
          <a className="link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;