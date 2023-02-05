import classes from './styles/Main.module.css';

const Main = props => {
    return (
        <main className={classes.main}>
            {props.children}
        </main>
    );
};

export default Main;