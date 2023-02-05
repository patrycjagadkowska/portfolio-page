import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

import classes from './styles/ContactPage.module.css';

const ContactPage = () => {
    return (
        <div className={classes['about-page']}>
            <h1>contact</h1>
            <div className={classes['contact-list__container']}>
                <ul className={classes['contact-list']}>
                    <li className={classes['contact-list__item']}>
                        <a href='mailto:patrycjagadkowska@gmail.com'>
                            <ImMail />
                        </a>
                        <span>patrycjagadkowska@gmail.com</span>
                    </li>
                    <li className={classes['contact-list__item']}>
                        <a href='https://linkedin.com'>
                            <FaLinkedin />
                        </a>
                        <span>LinkedIn</span>
                    </li>
                    <li className={classes['contact-list__item']}>
                        <a href='https://github.com'>
                            <FaGithub />
                        </a>
                        <span>GitHub</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;