import React from "react";
import preloader from "../../../assets/images/preloader.gif";

type PropsType = {}

let Preloader: React.FC = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
