import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

import FooterNavLink from "./FooterNavLink";
import FooterLink from "./FooterLink";

import classes from "./styles/FooterNav.module.css";

const FooterNav = () => {
  const [mainNav, setMainNav] = useState([]);
  const [iconsNav, setIconsNav] = useState([]);

  const mainNavList = useMemo(() => {
    return [
      { path: "/", title: "home" },
      { path: "/about", title: "about" },
      { path: "/portfolio", title: "portfolio" },
      { path: "/contact", title: "contact" },
    ];
  }, []);

  const iconsNavList = useMemo(() => {
    return [
      { path: "https://github.com/patrycjagadkowska", title: <FaGithub /> },
      { path: "https://www.linkedin.com/in/patrycja-gadkowska-600b34154/", title: <FaLinkedin /> },
    ];
  }, []);

  useEffect(() => {
    const mappedMainNav = mainNavList.map((item, index) => {
      return (
        <FooterNavLink
          path={item.path}
          title={item.title}
          key={`footernavlink${index}`}
        />
      );
    });
    const mappedIconsNav = iconsNavList.map((item, index) => {
      return (
        <FooterLink
          path={item.path}
          title={item.title}
          key={`footericonlink${index}`}
        />
      );
    });
    setMainNav(mappedMainNav);
    setIconsNav(mappedIconsNav);
  }, [mainNavList, iconsNavList, setMainNav, setIconsNav]);

  return (
    <nav className={classes["footer-nav"]}>
      <ul className={classes["footer-nav__main-nav"]}>{mainNav}</ul>
      <ul className={classes["footer-nav__links"]}>{iconsNav}</ul>
    </nav>
  );
};

export default FooterNav;