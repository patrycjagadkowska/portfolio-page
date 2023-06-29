import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { useState, useEffect, useMemo } from "react";

import ListItem from "./ListItem";

import classes from "./styles/AboutLists.module.css";

const ToolsList = () => {
  const [itemsList, setItemsList] = useState([]);

  const toolsList = useMemo(() => {
    return [
      { icon: <FaGitAlt />, title: "Git" },
      { icon: <FaGithub />, title: "Github" },
      { icon: <SiVisualstudiocode />, title: "Visual Studio Code" },
    ];
  }, []);

  useEffect(() => {
    const mappedArray = toolsList.map((item, index) => {
      return (
        <ListItem icon={item.icon} title={item.title} key={`tool${index}`} />
      );
    });
    setItemsList(mappedArray);
  }, [toolsList, setItemsList]);

  return <ul className={classes["icons-list"]}>{itemsList}</ul>;
};

export default ToolsList;