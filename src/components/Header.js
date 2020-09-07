import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <h1>~MASK ON~</h1>
      <div className="header__search">
        <input className="header__serachInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__option">
          <span>Login</span>
        </div>
        <div className="header__nav__option">
          <span>Dev Team</span>
        </div>
        <div className="header__nav__optionBasket">
          <ShoppingBasketIcon />
          <span>0 items</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
