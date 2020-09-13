import React from "react";
import { useStateValue } from "../context/StateProvider";
import { Card } from "@material-ui/core";
import MaskDetailContainer from "./MaskDetailContainer";
import "./css/MaskDetail.css";
import { useHistory } from "react-router-dom";
function MasksDetail() {
  const history = useHistory();
  const [{ detailMask }, dispatch] = useStateValue();
  const { mask } = detailMask;
  console.log(mask);

  return (
    <div className="maskDetail">
      {mask == {} && history.push("/")}
      {/** Container with the info */}
      <div classNamee="maskDetail__body">
        <MaskDetailContainer mask={mask} />
      </div>
      <div className="maskDetail__related"></div>

      {/**RELATED PRODUCTS AND OFFERS */}
    </div>
  );
}

export default MasksDetail;
