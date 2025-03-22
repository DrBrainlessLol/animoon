import React from "react";
import "./footer.css";
import SocialLinks from "../Navbar/SocialLinks";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
export default function Footer(props) {
  const handleNavigation = () => {
    props.IsLoading(true);
  };
  function getAlphabets() {
    const alphabets = [];
    const startChar = "A".charCodeAt(0);
    const endChar = "Z".charCodeAt(0);
    for (let i = startChar; i <= endChar; i++) {
      alphabets.push(String.fromCharCode(i));
    }
    const links = alphabets.map((el) => {
      return (
        <Link href={`/a-z/alpha?sort=${el}`} key={el} className="alphabet-tile" onClick={handleNavigation}>
          {el}
        </Link>
      );
    });
    return [...links];
  }
  const links = getAlphabets();

  return (
    <div className="footer-container d-flex-fd-column j-center">
      <div className="logo-social-links d-flex">
        <Link className="main-element" href="/" onClick={handleNavigation}>
          <Image
            src={logo}
            className="logo"
            alt="logo"
            width={0}
            height={0}
            sizes="3%"
          />
        </Link>
        <SocialLinks />
      </div>
      <div className="help-text d-flex">
        <h2 className="main-element">A-Z List</h2>
        <span>Searching anime order by alphabet name A to Z.</span>
      </div>
      <div className="alphabet-list d-flex">
        <Link href={"/a-z/all"} onClick={handleNavigation}>
          <div className="alphabet-tile">All</div>
        </Link>
        <Link href={"/a-z/other?sort=other"} onClick={handleNavigation}>
          <div className="alphabet-tile">#</div>
        </Link>
        <Link href={"/a-z/0-9?sort=0-9"} onClick={handleNavigation}>
          <div className="alphabet-tile">0-9</div>
        </Link>
        {links}
      </div>
      <div className="copyright-text">
        <p>
          Shizuru does not store any files on our server; we only link to the
          media which is hosted on 3rd party services.
        </p>
        <p>&copy; Shizuru All rights reserved.</p>
      </div>
    </div>
  );
}
