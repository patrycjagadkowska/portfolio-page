import { NavLink } from "react-router-dom";
import { useState } from "react";

import MainNav from "./MainNav";
import HamburgerButton from "../../UI/HamburgerButton";

import classes from './styles/Header.module.css';

const Header = () => {
   const [ openMenu, setOpenMenu ] = useState(false);

   const toggleMenu = () => {
    setOpenMenu(prevState => !prevState);
   };

    return (
        <>
        <header className={classes.header}>
            <div className={classes['header__home']}>
                <NavLink to='/' data-replace='HOME'><span>HOME</span></NavLink>
            </div>
            <MainNav openMenu={openMenu} toggleMenu={toggleMenu} />
            <HamburgerButton openMenu={openMenu} toggleMenu={toggleMenu} />
        </header>
        </>
    );
};

export default Header;