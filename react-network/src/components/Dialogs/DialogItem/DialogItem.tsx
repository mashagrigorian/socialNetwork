import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

type PropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
      {/* <div className={classes.item}>
        <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" />
        {props.message}
      </div> */}
    </div>
  );
};

export default DialogItem;
