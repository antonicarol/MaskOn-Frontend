import React from "react";
import { Button, Card } from "@material-ui/core";
import "./css/FilterMasks.css";
import { useStateValue } from "../../context/StateProvider";
import { db } from "../../db/axios";
import { actionTypes } from "../../context/reducer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import FilterListIcon from "@material-ui/icons/FilterList";
function FilterMasks() {
  const [state, dispatch] = useStateValue();

  const fetchMoreSold = () => {
    db.get("/api/masks/moreSold").then((result) => {
      dispatch({
        type: actionTypes.SET_MASKS,
        masks: result.data,
      });
    });
  };

  const fetchMorePopular = () => {
    db.get("/api/masks/morePopular").then((result) => {
      dispatch({
        type: actionTypes.SET_MASKS,
        masks: result.data,
      });
    });
  };

  const fetchMoreRecent = () => {
    db.get("/api/masks/moreRecent").then((result) => {
      console.log(result.data);
      dispatch({
        type: actionTypes.SET_MASKS,
        masks: result.data,
      });
    });
  };
  return (
    <Card elevation={20} className="filterMasks">
      <Button onClick={fetchMoreSold}>
        <AttachMoneyIcon />
        More Sold
      </Button>
      <Button onClick={fetchMorePopular}>
        <ChildCareIcon />
        More Popular
      </Button>
      <Button onClick={fetchMoreRecent}>
        <NewReleasesIcon />
        New Ones
      </Button>
      <Button>
        <FilterListIcon />
        More Specific Filters
      </Button>
    </Card>
  );
}

export default FilterMasks;
