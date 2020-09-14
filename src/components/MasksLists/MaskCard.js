import React, { forwardRef } from "react";
import "./css/MaskCard.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextTruncate from "react-text-truncate";
import { applyDiscount } from "../utils/shop";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import { useHistory } from "react-router-dom";
import { applyCurrency, applyCurrencySale } from "../utils/currency";
import toastr from "toastr";

const MaskCard = forwardRef(
  ({ title, price, descr, img, size, onSale, discount }, ref) => {
    const history = useHistory();
    const [{ masksOnSale, masks, currency }, dispatch] = useStateValue();
    const large = size === "large" ? true : false;

    const handleClick = () => {
      const mask = onSale
        ? { onSale: onSale, mask: masksOnSale.find((m) => m.name === title) }
        : { onSale: onSale, mask: masks.find((m) => m.name === title) };
      console.log(mask);
      dispatch({
        type: mask.onSale
          ? actionTypes.SET_DETAIL_MASK_SALE
          : actionTypes.SET_DETAIL_MASK_NEW,
        mask: mask,
      });
      history.push("/detail");
    };

    const addToBasket = () => {
      const mask = masks.find((m) => m.name === title);
      console.log(mask);
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        mask: mask,
      });
      toastr.options = {
        positionClass: "toast-top-right",
        hideDuration: 200,
        timeOut: 1000,
      };
      setTimeout(() => toastr.success("Item Added to the basket"), 200);
    };

    return (
      <Card
        ref={ref}
        elevation={4}
        className={`maskCard--${size} ${onSale && "maskCard--small--onSale"}`}
      >
        <CardActionArea onClick={handleClick}>
          <CardMedia
            image={img}
            title="Mask"
            className={`maskCard__media--${size}`}
          />
          <CardContent>
            {large && (
              <TextTruncate
                className="maskCard__title"
                line={1}
                element="h2"
                text={title}
              />
            )}
            {onSale && (
              <div className="maskCard__onSale">
                <h2>{`${discount?.$numberDecimal}%`}</h2>
              </div>
            )}
          </CardContent>
        </CardActionArea>

        {large ? (
          <>
            <hr></hr>
            <CardActions className="maskCard__actions">
              <Typography className="maskCard__price">
                {`${applyCurrency(
                  price?.$numberDecimal,
                  currency?.prevDiff,
                  currency
                )}`}
              </Typography>
              <IconButton>
                <ShoppingBasketIcon onClick={addToBasket} fontSize="large" />
              </IconButton>
            </CardActions>
          </>
        ) : (
          <>
            <hr></hr>
            <CardActions className="maskCard__actions--small">
              <Typography className="maskCard__price--small">
                {`${currency?.symbol}${applyCurrency(
                  price.$numberDecimal,
                  currency.prevDiff,
                  currency
                )}`}
              </Typography>
              <Typography>{`${currency?.symbol}${applyDiscount(
                applyCurrencySale(
                  price.$numberDecimal,
                  currency.prevDiff,
                  currency
                ),
                discount.$numberDecimal
              )}`}</Typography>
            </CardActions>
          </>
        )}
      </Card>
    );
  }
);

export default MaskCard;
/* <div className="maskCard">
      <img alt="" src={img} />
      <h4>{title}</h4>

      <p>{`EUR €${price.$numberDecimal.toString()}`}</p>
    </div> */
