import classes from "./styles/AnimatedCircles.module.css";

const AnimatedCircles = () => {
  return (
    <div className={classes["animated-circles"]}>
      <div className={classes.circle} />
      <div className={classes.circle} />
      <div className={classes.circle} />
    </div>
  );
};

export default AnimatedCircles;
