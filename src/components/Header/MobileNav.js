import { NavLink } from "react-router-dom";

import classes from './styles/MobileNav.module.css';

const MobileNav = () => {
    return (
        <nav className={classes['mobile-nav']}>
            <NavLink to='about'>about me</NavLink>
            <NavLink to='portfolio'>portfolio</NavLink>
            <NavLink to='contact'>contact</NavLink>
        </nav>
    );
};

export default MobileNav;