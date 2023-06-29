import SkillsList from "../components/About/SkillsList";
import ToolsList from "../components/About/ToolsList";

import classes from "./styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={classes["about-page"]}>
      <section className={classes["about-page__section--about"]}>
        <h1 className={classes["about-page__header"]}>about me</h1>
        My name is Patrycja Gadkowska and in the beginning of 2022 I decided to
        become Frontend Developer. A few months after I found React and I loved
        to learn it. Currently I am looking for my first job as React Frontend
        Developer.
      </section>
      <section className={classes["about-page__section"]}>
        <h2 className={classes["about-page__header"]}>my skills</h2>
        <SkillsList />
      </section>
      <section className={classes["about-page__section"]}>
        <h2 className={classes["about-page__header"]}>my tools</h2>
        <ToolsList />
      </section>
      <div className={classes["animation__circle"]} />
      <div className={classes["animation__circle"]} />
      <div className={classes["animation__circle"]} />
    </div>
  );
};

export default AboutPage;