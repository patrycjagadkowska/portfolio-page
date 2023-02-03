import { Link, NavLink } from "react-router-dom"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import classes from './styles/FooterNav.module.css';

const FooterNav = () => {
    return (
        <nav className={classes['footer-nav']}>
            <ul className={classes['footer-nav__main-nav']}>
                <li className={classes['footer-nav__main-nav--link']}>
                    <NavLink to='/'>home</NavLink>
                </li>
                <li className={classes['footer-nav__main-nav--link']}>
                    <NavLink to='contact'>contact</NavLink>
                </li>
            </ul>
            <ul className={classes['footer-nav__links']}>
                <li className={classes['footer-nav__link']}>
                    <Link to='https://github.com'>
                        <FaGithub />
                    </Link>
                </li>
                <li className={classes['footer-nav__link']}>
                    <Link to='https://linkedin.com'>
                        <FaLinkedin />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;