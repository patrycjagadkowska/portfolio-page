import classes from './styles/Main.module.css';

const Main = ({ children }) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    );
};

export default Main;