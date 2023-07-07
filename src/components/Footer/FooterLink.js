import classes from "./styles/FooterNavLink.module.css";

const FooterLink = ({ path, title }) => {
  return <li className={classes["footer-nav-link"]}><a href={path}>{title}</a></li>;
};

export default FooterLink;