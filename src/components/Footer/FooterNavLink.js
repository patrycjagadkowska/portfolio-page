import { Link } from "react-router-dom";

import classes from "./styles/FooterNavLink.module.css";

const FooterNavLink = ({ path, title }) => {
    return (
        <li className={classes["footer-nav-link"]}>
            <Link to={path}>{title}</Link>
        </li>
    );
};

export default FooterNavLink;