import numeral from "numeral";

export const applyDiscount = (price, discount) => {
  var percent = (parseInt(discount) / 100) * price;

  return numeral(price - percent).format("0.0");
};

export const getTotalPrice = (basket) => {
  var totalPrice = 0.0;
  basket.forEach((item) => {
    totalPrice += Number(item.price.$numberDecimal);
  });
  return totalPrice;
};
