import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FcSmartphoneTablet } from "react-icons/fc";

import ListItem from "./ListItem";

import classes from "./styles/AboutLists.module.css";

const SkillsList = () => {
  const skillsList = [
    { icon: <FaHtml5 />, title: "HTML5" },
    { icon: <FaCss3Alt />, title: "CSS3" },
    { icon: <SiJavascript />, title: "JavaScript" },
    { icon: <FaReact />, title: "React" },
    { icon: <FaBootstrap />, title: "Bootstrap" },
    { icon: <FcSmartphoneTablet />, title: "RWD" },
  ];

  const mappedItems = skillsList.map((item, index) => {
    return (
      <ListItem icon={item.icon} title={item.title} key={`skill${index}`} />
    );
  });

  return <ul className={classes["icons-list"]}>{mappedItems}</ul>;
};

export default SkillsList;