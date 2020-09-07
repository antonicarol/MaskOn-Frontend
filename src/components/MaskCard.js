import React from "react";
import "./css/MaskCard.css";
function MaskCard({ title, price, descr, img }) {
  return (
    <div className="maskCard">
      <img alt="" src={img} />
      <h4>{title}</h4>

      <p>{`EUR €${price.$numberDecimal.toString()}`}</p>
    </div>
  );
}

export default MaskCard;
