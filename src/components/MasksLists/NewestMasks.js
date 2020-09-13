import React from "react";
import "./css/NewestMasks.css";
import { useStateValue } from "../../context/StateProvider";
import MaskCard from "./MaskCard";
import FlipMove from "react-flip-move";
function NewestMasks() {
  const [{ masks }] = useStateValue();
  return (
    <div className="newestMasks">
      <div className="newestMasks__masks">
        <FlipMove className="newestMasks__masksFlip">
          {masks?.map((mask) => (
            <MaskCard
              size="large"
              key={mask._id}
              title={mask.name}
              img={mask.image}
              descr={mask.desc}
              price={mask.price}
              discount={mask.discount}
              onSale={false}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default NewestMasks;
