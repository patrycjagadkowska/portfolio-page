import { FaGithub } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import classes from './styles/ContactPage.module.css';

const ContactPage = () => {
    return (
        <div className={classes['contact-page']}>
            <h1>contact</h1>
                <ul className={classes['contact-list']}>
                    <li className={classes['contact-list__item']}>
                        <a href='mailto:patrycjagadkowska@gmail.com'>
                            <ImMail4 />
                        </a>
                        <span>patrycjagadkowska@gmail.com</span>
                    </li>
                    <li className={classes['contact-list__item']}>
                        <a href='https://linkedin.com'>
                            <TiSocialLinkedinCircular />
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
                <div className={classes['animation__circle']} />
                <div className={classes['animation__circle']} />
                <div className={classes['animation__circle']} />
        </div>
    );
};

export default ContactPage;