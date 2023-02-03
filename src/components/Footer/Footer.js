import FooterNav from './FooterNav';

import classes from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes['footer__copyright']}>
                <span>&copy; Copyright Patrycja Gadkowska 2023</span>
            </div>
            <FooterNav />
        </footer>
    );
};

export default Footer;