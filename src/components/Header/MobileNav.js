import { NavLink } from "react-router-dom";

import classes from './styles/MobileNav.module.css';

const MobileNav = () => {
    return (
        <nav className={classes['mobile-nav']}>
            <NavLink to='about' data-replace='about me'><span>about me</span></NavLink>
            <NavLink to='portfolio' data-replace='portfolio'><span>portfolio</span></NavLink>
            <NavLink to='contact' data-replace='contact'><span>contact</span></NavLink>
        </nav>
    );
};

export default MobileNav;