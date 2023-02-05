import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FcSmartphoneTablet } from 'react-icons/fc';

import classes from './styles/AboutLists.module.css';

const SkillsList = () => {
    return (
        <ul className={classes['icons-list']}>
            <li className={classes['icons-list__icon']}>
                <FaHtml5 />
                <h3>HTML5</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FaCss3Alt />
                <h3>CSS3</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <SiJavascript />
                <h3>JavaScript</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FaReact />
                <h3>React</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FaBootstrap />
                <h3>Bootstrap 5</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FaSass />
                <h3>SASS</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FcSmartphoneTablet />
                <h3>RWD</h3>
            </li>
        </ul>
    );
};

export default SkillsList;