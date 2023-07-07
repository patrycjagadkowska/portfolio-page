import Project from "../components/Portfolio/Project";
import AnimatedCircles from "../UI/AnimatedCircles";

import classes from "./styles/PortfolioPage.module.css";

const PortfolioPage = () => {
  return (
    <div className={classes["portfolio-page"]}>
      <h1>my projects</h1>
      <div className={classes.projects}>
        <Project
          header="Portfolio Page"
          description="My personal portfolio page containing my projects and info."
          ghlink="https://github.com/patrycjagadkowska"
          demolink="somedomain.com"
          skills={["HTML", "CSS", "JavaScript", "React", "RWD"]}
          image={require("../assets/portfolio-project.png")}
        />
        <Project
          header="PortuApp"
          description="Demo application to learn portuguese."
          ghlink="https://github.com/patrycjagadkowska/PortuApp"
          demolink="somedomain.com"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "API",
            "RWD",
          ]}
          image={require("../assets/portuapp-project.png")}
        />
      </div>
      <AnimatedCircles />
    </div>
  );
};

export default PortfolioPage;