import { createPortal } from "react-dom";

import classes from './styles/Backdrop.module.css';

const Backdrop = props => {
    return (
        <>
            {createPortal(<div className={classes.backdrop} onClick={props.onClick} />,
            document.getElementById('backdrop-root'))}
        </>
    );
};

export default Backdrop;