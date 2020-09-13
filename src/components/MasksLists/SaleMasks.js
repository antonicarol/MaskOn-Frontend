import React from "react";
import "./css/SaleMasks.css";
import { useStateValue } from "../../context/StateProvider";
import MaskCard from "./MaskCard";
import Ticker from "react-ticker";
function SaleMasks() {
  const [{ masksOnSale }, dispatch] = useStateValue();
  return (
    <div className="saleMasks">
      <div className="saleMasks__masks">
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              {masksOnSale?.map((mask) => (
                <MaskCard
                  size="small"
                  key={mask._id}
                  title={mask.name}
                  img={mask.image}
                  descr={mask.desc}
                  price={mask.price}
                  discount={mask.discount}
                  onSale={true}
                />
              ))}
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default SaleMasks;
