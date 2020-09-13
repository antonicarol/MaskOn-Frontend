import React, { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import NewestMasks from "../MasksLists/NewestMasks";
import "./css/Home.css";
import { currencyApi, db } from "../../db/axios";
import { actionTypes } from "../../context/reducer";
import SaleMasks from "../MasksLists/SaleMasks";
import FilterMasks from "./FilterMasks";
import { Card, MenuItem, Select } from "@material-ui/core";
import { setCurrencyList } from "../utils/currency";

function Home() {
  const [{ currencyList, currency }, dispatch] = useStateValue();
  const [selCurrency, setCurrency] = useState(currency);

  useEffect(() => {
    db.get("/api/masks/all").then((result) => {
      dispatch({
        type: actionTypes.SET_MASKS,
        masks: result.data,
      });
    });
  }, [currency]);

  useEffect(() => {
    db.get("/api/masks/onSale").then((result) => {
      dispatch({
        type: actionTypes.SET_MASKS_ONSALE,
        masks: result.data,
      });
    });
  }, [currency]);

  useEffect(() => {
    currencyApi.get("/latest").then((result) => {
      const types = setCurrencyList(result.data.rates);
      dispatch({
        type: actionTypes.SET_CURRENCY_LIST,
        currencyList: types,
      });
    });
  }, []);

  useEffect(() => {
    currencyApi.get(`/latest?base=${currency.base}`).then((result) => {
      var rate = result.data.rates[selCurrency.name];
      var diff = 1;
      if (rate === undefined) {
        return -1;
      } else {
        diff = rate;
      }

      dispatch({
        type: actionTypes.CHANGE_CURRECY,
        currency: {
          base: selCurrency.name,
          symbol: selCurrency.symbol,
          prevDiff: diff,
        },
      });
    });
  }, [selCurrency]);

  return (
    <div className="home">
      <div className="home__options">
        <FilterMasks />
        <Card className="home__currencyExchange">
          <h4>Change The currency</h4>
          <Select
            onChange={(e) => setCurrency(e.target.value)}
            value={selCurrency}
            className="home__selectCurrency"
          >
            <MenuItem selected>{currency.base}</MenuItem>
            {currencyList?.map((curr) => (
              <MenuItem key={Math.random(0, 9999)} value={curr}>
                <div className="home__currencyList__item">
                  <strong>{curr.symbol}</strong>
                  <span>{curr.name}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </Card>
      </div>

      <NewestMasks />
      <SaleMasks />
    </div>
  );
}

export default Home;
