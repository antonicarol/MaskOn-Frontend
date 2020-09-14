import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import React from "react";
import "./css/CheckoutItem.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import toastr from "toastr";
import { applyCurrency } from "../utils/currency";
function CheckoutItem({ title, price, image }) {
  const [{ basket, currency }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    const mask = basket.find((m) => m.name === title);
    dispatch({
      type: actionTypes.DEL_FROM_BASKET,
      mask: mask,
    });
    toastr.options = {
      positionClass: "toast-top-right",
      hideDuration: 300,
      timeOut: 3000,
    };
    setTimeout(() => toastr.success("Item deleted from the basket"), 200);
  };
  return (
    <Card elevation={7} className="checkoutItem">
      <CardContent className="checkoutItem__content">
        <img src={image} />
        <div className="checkoutItem__info">
          <h2>{title}</h2>
          <Typography as="h3">
            {applyCurrency(price.$numberDecimal, currency.prevDiff, currency)}
          </Typography>
        </div>
        <IconButton
          onClick={removeFromBasket}
          className="checkoutItem__deleteButton"
        >
          <DeleteForeverIcon fontSize="large" />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default CheckoutItem;
