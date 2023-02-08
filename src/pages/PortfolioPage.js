import Project from '../components/Portfolio/Project';
import classes from './styles/PortfolioPage.module.css';

const PortfolioPage = () => {
    return (
        <div className={classes['portfolio-page']}>
            <h1>my projects</h1>
            <div className={classes.projects}>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
};

export default PortfolioPage;