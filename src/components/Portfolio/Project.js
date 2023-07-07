import { FaGithub, FaPlayCircle } from "react-icons/fa";

import Card from "../../UI/Card";

import classes from "./styles/Project.module.css";

const Project = ({ header, description, ghlink, demolink, skills, image }) => {
  const skillsList = skills.map((skill, index) => {
    return <li key={`skillItem/${index}`}>{skill}</li>;
  });

  return (
    <Card
      className={classes.project}
    >
      <div className={classes["project__background"]} style={{ background: `url(${image}) center/cover` }}>
        <header className={classes["project__header"]}>
          <h3>{header}</h3>
          <p>{description}</p>
        </header>
        <section className={classes["project__actions"]}>
          <div className={classes["project__actions--action"]}>
            <a href={ghlink}>
              <FaGithub />
            </a>
          </div>
          <div className={classes["project__actions--action"]}>
            <a href={demolink}>
              <FaPlayCircle />
            </a>
          </div>
        </section>
        <section className={classes["project__skills"]}>
          <ul className={classes["project__skills--list"]}>{skillsList}</ul>
        </section>
      </div>
    </Card>
  );
};

export default Project;
