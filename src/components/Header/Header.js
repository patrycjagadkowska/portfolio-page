import { NavLink } from "react-router-dom"

import MainNav from "./MainNav";

import classes from './styles/Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes['header__home-link']}>
                <NavLink to='/'>HOME</NavLink>
            </div>
            <MainNav />
            <div className={classes['header__toggle-button']}>
                <span />
                <span />
                <span />
            </div>
        </header>
    );
};

export default Header;