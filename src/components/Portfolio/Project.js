import { FaGithub, FaPlayCircle } from 'react-icons/fa';

import Card from "../../UI/Card";

import classes from './styles/Project.module.css';

const Project = () => {
    return (
        <Card className={classes.project}>
                <div className={classes['project__header']}>
                    <h3>project's header</h3>
                    <p>short description of project</p>
                </div>
                <div className={classes['project__actions']}>
                    <div className={classes['project__actions--action']}>
                        <a href='https://github/com'><FaGithub /></a>
                    </div>
                    <div className={classes['project__actions--action']}>
                        <a href='https://somedomain.com'><FaPlayCircle /></a>
                    </div>
                </div>
                <div className={classes['project__skills']}>
                    <ul className={classes['project__skills--list']}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScipt</li>
                        <li>React</li>
                        <li>RWD</li>
                    </ul>
                </div>
        </Card>
    );
};

export default Project;