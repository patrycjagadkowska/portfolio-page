import classes from "./styles/AboutLists.module.css";

const ListItem = ({ icon, title }) => {
  return (
    <li className={classes["icons-list__icon"]}>
      {icon}
      <h3>{title}</h3>
    </li>
  );
};

export default ListItem;
