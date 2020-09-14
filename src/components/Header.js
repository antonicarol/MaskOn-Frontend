import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            className="header__logoBack"
            src="https://image.flaticon.com/icons/svg/1535/1535314.svg"
            alt=""
          />
          <img
            className="header__logoSuperposed"
            src="https://image.flaticon.com/icons/svg/1535/1535223.svg"
            alt=""
          />
        </div>
      </Link>
      <div className="header__search">
        <input className="header__serachInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__option">
          <AccountCircleIcon />
          <span>Login</span>
        </div>
        <div
          className="header__nav__option"
          onClick={() => window.open("https://covid-19-tracker-a4423.web.app/")}
        >
          <PublicIcon />
          <span>Covid-19 Tracker</span>
        </div>
        <Link to="/checkout">
          <div className="header__nav__optionBasket">
            <ShoppingBasketIcon />
            <span>{basket?.length} items</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
