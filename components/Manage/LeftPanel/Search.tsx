"use client";
import React, { useState } from "react";

const Search = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="mdc-menu-anchor">
      <button
        id="fab-search"
        className="mdc-fab mdc-fab--mini"
        aria-label="Search"
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-search mdc-fab__icon colorTipContainer manage-fab">
          <span className="colorTip">
            <span className="colorTipContent">Search</span>
            <span className="pointyTipShadow"></span>
            <span className="pointyTip"></span>
          </span>
        </i>
      </button>

      <div
        id="fab-search-menu"
        className={`mdc-menu ${isShow && "mdc-menu--open"}`}
        tabIndex={-1}
        style={{ transformOrigin: "left top", left: 0, top: 0 }}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <div className="mdc-text-field mdc-text-field--dense">
              <input
                id="fab-search-input"
                className="mdc-text-field__input"
                type="text"
                placeholder="Search"
              />
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Search;
