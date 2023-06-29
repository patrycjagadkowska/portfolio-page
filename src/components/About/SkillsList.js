import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FcSmartphoneTablet } from "react-icons/fc";
import { useEffect, useState, useMemo } from "react";

import ListItem from "./ListItem";

import classes from "./styles/AboutLists.module.css";

const SkillsList = () => {
  const [itemsList, setItemsList] = useState([]);

  const skillsList = useMemo(() => {
    return [
        { icon: <FaHtml5 />, title: "HTML5" },
        { icon: <FaCss3Alt />, title: "CSS3" },
        { icon: <SiJavascript />, title: "JavaScript" },
        { icon: <FaReact />, title: "React" },
        { icon: <FaBootstrap />, title: "Bootstrap" },
        { icon: <FaSass />, title: "SASS" },
        { icon: <FcSmartphoneTablet />, title: "RWD" },
      ]
  }, []);

  useEffect(() => {
    const mappedItems = skillsList.map((item, index) => {
      return <ListItem icon={item.icon} title={item.title} key={`skill${index}`} />;
    });
    setItemsList(mappedItems);
  }, [skillsList, setItemsList]);

  return <ul className={classes["icons-list"]}>{itemsList}</ul>;
};

export default SkillsList;