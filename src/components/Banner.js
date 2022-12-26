import React from "react";
import Nav from "./Nav";

function Banner({ openMobileMenu, setOpenMobileMenu, openMenu }) {
  return (
    <div className="banner">
      <div className="bg-image">
        <img src="/images/image-hero-mobile.jpg" alt="" />
      </div>
      <Nav
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        openMenu={openMenu}
      />
    </div>
  );
}

export default Banner;
