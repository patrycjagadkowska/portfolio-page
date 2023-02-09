import { NavLink } from "react-router-dom";
import { useState } from "react";

import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Backdrop from "../../UI/Backdrop";

import classes from './styles/Header.module.css';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    };

    return (
        <>
        <header className={classes.header}>
            <div className={classes['header__home']}>
                <NavLink to='/' data-replace='HOME'><span>HOME</span></NavLink>
            </div>
            <MainNav />
            <div className={classes['header__toggle-button']} onClick={handleClick}>
                <span />
                <span />
                <span />
            </div>
            <div className={classes['header__toggle-button--background']}>
            </div>
        </header>
        {showNav && <Backdrop onClick={handleClick} />}
        {showNav && <MobileNav />}
        </>
    );
};

export default Header;