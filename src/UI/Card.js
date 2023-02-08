import classes from './styles/Card.module.css';

const Card = props => {
    const classesList = `${classes.card} ${props.className}`;
    return (
        <div className={classesList}>
            {props.children}
        </div>
    );
};

export default Card;