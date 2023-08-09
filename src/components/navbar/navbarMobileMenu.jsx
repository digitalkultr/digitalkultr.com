import React from "react";
import NavbarLinks from "./navbarLinks";

const NavbarMobileMenu = ({menuActive}) => {
  return (
    <aside className={`mobile-menu ${menuActive ? "" : "is-open"}`}>
      <div className="mobile-menu-container container" >
        <NavbarLinks />
        <div className="menu-footer">
          © 2022 developed by digitalkultr.
        </div>
      </div>
    </aside>
  )
}

export default NavbarMobileMenu;