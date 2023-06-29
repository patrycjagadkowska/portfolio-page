import classes from "./styles/MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <header className={classes["main-page__header"]}>
        <h1>
          Hi!
          <br />
          I'm Patrycja
          <br />
          and I'm React Frontend Developer
        </h1>
      </header>
      <div className={classes["animations"]}>
        <div className={classes["animations__circle"]} />
        <div className={classes["animations__circle"]} />
        <div className={classes["animations__circle"]} />
      </div>
    </>
  );
};

export default MainPage;