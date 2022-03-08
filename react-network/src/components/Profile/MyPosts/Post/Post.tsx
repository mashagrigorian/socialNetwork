import React from "react";
import classes from "./Post.module.css";

type PropsType = {
  message: string
  likesCount: number
}
const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/originals/c1/85/d7/c185d77163c157008199e78f78cca13e.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
