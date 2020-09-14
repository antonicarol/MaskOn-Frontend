import { Card, Typography } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { applyCurrency } from "../utils/currency";
import { getTotalPrice } from "../utils/shop";
import "./css/CheckoutTotals.css";
function CheckoutTotals() {
  const [{ basket, currency }, dispatch] = useStateValue();

  const totalPrice = getTotalPrice(basket);
  return (
    <Card elevatio={7} className="checkoutTotals">
      <h1>Totals</h1>
      <div className="checkoutTotals__items">
        {basket.map((item) => (
          <div>
            <span>{item.name}</span>
            <span>{item.price.$numberDecimal}</span>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="checkoutTotals__total">
        <Typography as="h3">Total</Typography>
        <span>{applyCurrency(totalPrice, currency.prevDiff, currency)}</span>
      </div>
    </Card>
  );
}

export default CheckoutTotals;
