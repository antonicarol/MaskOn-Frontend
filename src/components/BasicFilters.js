import React, { useState, useEffect } from "react";
import "./css/BasicFilters.css";
import { Button, Slider } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";
import axios from "../db/axios";
import { actionTypes } from "../context/reducer";
function BasicFilters() {
  const [priceFilter, setPriceFilter] = useState(0);
  const [priceMethod, setPriceMethod] = useState("");
  const [filteredMasks, setfilteredMasks] = useState([]);
  const [{ masks }, dispatch] = useStateValue();
  const valuetext = (value) => {
    return `${value}€`;
  };

  const handleChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  const filterType = (type) => {
    axios.get(`/api/masks/${type}`).then((result) => {
      setfilteredMasks(result.data);
    });
    console.log(masks);
  };

  const filterPrice = () => {
    console.log(priceFilter, priceMethod);
    axios
      .get(`/api/masks/${priceFilter.toString()}/${priceMethod}`)
      .then((result) => {
        setfilteredMasks(result.data);
      });
  };

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_MASKS,
      masks: filteredMasks,
    });
  }, [filteredMasks]);

  return (
    <div className="basicFilters">
      <h2>Filters</h2>
      <div className="basicFilters__type">
        <Button onClick={() => filterType("Cotton")}>Cotton</Button>
        <Button onClick={() => filterType("Viscose")}>Viscose</Button>
        <Button onClick={() => filterType("Polyamide")}>Polyamide</Button>
      </div>
      <div className="basicFilters__price">
        <h4>Price Filter</h4>
        <Slider
          onChange={handleChange}
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={100}
        />
        <div className="basicFilters__priceTypr">
          <Button
            onClick={() => {
              setPriceMethod("gte");
            }}
          >
            Greater
          </Button>
          <Button onClick={() => setPriceMethod("lte")}>Lower</Button>
          <Button onClick={filterPrice}>Filter by Price</Button>
        </div>
      </div>
    </div>
  );
}

export default BasicFilters;
