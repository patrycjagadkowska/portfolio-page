import classes from "./styles/HamburgerButton.module.css";

const HamburgerButton = ({ toggleMenu, openMenu }) => {
  return (
    <button
      aria-label="open menu"
      onClick={toggleMenu}
      className={`${classes.hamburger} ${openMenu ? classes.open : ""}`}
    >
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
    </button>
  );
};

export default HamburgerButton;
