import { NavLink } from "react-router-dom";

import classes from './styles/MainNav.module.css';

const MainNav = () => {
    return (
        <nav className={classes['main-nav']}>
            <ul className={classes['main-nav__links']}>
                <li className={classes['main-nav__link']}>
                    <NavLink to='about'>about me</NavLink>
                </li>
                <li className={classes['main-nav__link']}>
                    <NavLink to='portfolio'>portfolio</NavLink>
                </li>
                <li className={classes['main-nav__link']}>
                    <NavLink to='contact'>contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;