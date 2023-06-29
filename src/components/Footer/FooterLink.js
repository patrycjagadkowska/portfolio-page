import classes from "./styles/FooterNavLink.module.css";

const FooterLink = ({ path, title }) => {
  return <li className={classes["footer-nav-link"]}>{title}</li>;
};

export default FooterLink;