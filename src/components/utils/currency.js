import numeral from "numeral";

export const applyCurrency = (price, diff, currency) => {
  return `${currency.base} ${currency.symbol} ${numeral(price * diff).format(
    "0.00"
  )}`;
};

export const applyCurrencySale = (price, diff, currency) => {
  return numeral(price * diff).format("0.00");
};

export const setCurrencyList = (apiList) => {
  var types = [];
  types.push({
    name: "EUR",
    symbol: "€",
  });
  for (var k in apiList) {
    const symbol = symbols[k];
    types.push({
      name: k,
      symbol: symbol,
    });
  }
  return types;
};

export const symbols = {
  EUR: "€",
  BGN: "лв",
  CHF: "CHF",
  CZK: "Kč",
  DKK: "kr",
  GBP: "£",
  AUD: "$",
  BRL: "R$",
  CAD: "$",
  CNY: "¥",
  HKD: "元",
  HRK: "kn",
  HUF: "ft",
  IDR: "Rp",
  ILS: "₪",
  INR: "₹",
  ISK: "kr",
  JPY: "¥",
  KRW: "₩",
  MXN: "$",
  MYR: "RM",
  NOK: "kr",
  NZD: "$",
  PHP: "₱",
  PLN: "zł",
  RON: "lei",
  RUB: "₽",
  SEK: "kr",
  THB: "฿",
  USD: "$",
  TRY: "₺",
  SHD: "$",
  ZAR: "R",
  SGD: "S$",
};
