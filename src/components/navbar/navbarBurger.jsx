import React from "react";

const NavbarBurger = ({menuActive, onClick}) => {
  const handleOnClick = (e) => {
    if (onClick) onClick(e);
  }

  return (
    <div
      className={`burger-icon ${menuActive ? "" : "is-open"}`}
      id="burger"
      onClick={handleOnClick}
    >
      <div className="burger-line"/>
      <div className="burger-line"/>
    </div>
  )
}

export default NavbarBurger;