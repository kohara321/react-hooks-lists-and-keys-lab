import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const arrLinks = links.map(link =>{
    return <a key={link} href={'#'+link}>{link}</a>
  })
  return <nav>{arrLinks}</nav>;
}

export default NavBar;
