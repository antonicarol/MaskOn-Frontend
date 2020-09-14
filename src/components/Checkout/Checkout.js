import React from "react";
import { useStateValue } from "../../context/StateProvider";
import CheckoutItem from "./CheckoutItem";
import CheckoutTotals from "./CheckoutTotals";
import "./css/Checkout.css";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__items">
        {basket.length === 0 ? (
          <h1>NO MASKS ON THE BASKET</h1>
        ) : (
          <>
            {basket.map((mask) => (
              <CheckoutItem
                title={mask.name}
                key={mask._id}
                image={mask.image}
                price={mask.price}
              />
            ))}
          </>
        )}
      </div>
      <div className="checkout__totals">
        <CheckoutTotals />
      </div>
    </div>
  );
}

export default Checkout;
