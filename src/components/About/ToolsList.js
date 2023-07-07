import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

import ListItem from "./ListItem";

import classes from "./styles/AboutLists.module.css";

const ToolsList = () => {
  const toolsList = [
    { icon: <FaGitAlt />, title: "Git" },
    { icon: <FaGithub />, title: "Github" },
    { icon: <SiVisualstudiocode />, title: "Visual Studio Code" },
  ];

  const mappedArray = toolsList.map((item, index) => {
    return (
      <ListItem icon={item.icon} title={item.title} key={`tool${index}`} />
    );
  });

  return <ul className={classes["icons-list"]}>{mappedArray}</ul>;
};

export default ToolsList;