import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';

import classes from './styles/AboutLists.module.css';

const ToolsList = () => {
    return (
        <ul className={classes['icons-list']}>
            <li className={classes['icons-list__icon']}>
                <FaGitAlt />
                <h3>Git</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <FaGithub />
                <h3>GitHub</h3>
            </li>
            <li className={classes['icons-list__icon']}>
                <SiVisualstudiocode />
                <h3>Visual Studio Code</h3> 
            </li>
        </ul>
    );
};

export default ToolsList;