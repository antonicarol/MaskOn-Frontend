import React from "react";
import { Container, Card } from "@material-ui/core";
import "./css/MaskDetailContainer.css";
function MaskDetailContainer({ mask }) {
  return (
    <div className="maskDetailContainer">
      <img alt="" src={mask.image} />
      <div className="maskDetailContainer__info">
        <h1>{mask.name}</h1>
        <p>{mask.desc}</p>
      </div>
    </div>
  );
}

export default MaskDetailContainer;
