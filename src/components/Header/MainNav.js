import { NavLink } from "react-router-dom";

import classes from './styles/MainNav.module.css';

const MainNav = ({ openMenu, toggleMenu }) => {
    return (
        <nav className={`${classes['main-nav']} ${openMenu ? classes.open : ""}`} onClick={toggleMenu}>
            <ul className={classes['main-nav__links']}>
                <li className={classes['main-nav__link']}>
                    <NavLink to='about' data-replace='about me'><span>about me</span></NavLink>
                </li>
                <li className={classes['main-nav__link']}>
                    <NavLink to='portfolio' data-replace='portfolio'><span>portfolio</span></NavLink>
                </li>
                <li className={classes['main-nav__link']}>
                    <NavLink to='contact' data-replace='contact'><span>contact</span></NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;