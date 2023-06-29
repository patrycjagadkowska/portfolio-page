import { createPortal } from "react-dom";

import classes from "./styles/Backdrop.module.css";

const Backdrop = ({ onClick }) => {
  return (
    <>
      {createPortal(
        <div className={classes.backdrop} onClick={onClick} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Backdrop;