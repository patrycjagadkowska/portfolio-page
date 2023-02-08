import { NavLink } from "react-router-dom";
import { useState } from "react";

import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

import classes from './styles/Header.module.css';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    };

    return (
        <header className={classes.header}>
            <div className={classes['header__home']}>
                <NavLink to='/'>HOME</NavLink>
            </div>
            <MainNav />
            {showNav && <MobileNav />}
            <div className={classes['header__toggle-button']} onClick={handleClick}>
                <span />
                <span />
                <span />
            </div>
        </header>
    );
};

export default Header;