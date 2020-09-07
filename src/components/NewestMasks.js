import React, { useEffect } from "react";
import "./css/NewestMasks.css";
import { useStateValue } from "../context/StateProvider";
import MaskCard from "./MaskCard";
import axios from "../db/axios";
import { actionTypes } from "../context/reducer";

function NewestMasks() {
  const [{ masks }, dispatch] = useStateValue();
  console.log(masks);
  useEffect(() => {
    console.log("Fetching Masks!");
    axios.get("/api/masks/all").then((result) => {
      dispatch({
        type: actionTypes.SET_MASKS,
        masks: result.data,
      });
    });
  }, []);

  return (
    <div className="newestMasks">
      <h1> Newest Masks</h1>
      <div className="newestMasks__masks">
        {masks?.map((mask) => (
          <MaskCard
            title={mask.name}
            img={mask.image}
            descr={mask.desc}
            price={mask.price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewestMasks;
