"use client";
import React, { useState } from "react";

const Sort = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="mdc-menu-anchor">
      <button
        id="fab-sort"
        className="mdc-fab mdc-fab--mini"
        aria-label="Sort"
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-sort-numeric-asc mdc-fab__icon colorTipContainer manage-fab">
          <span className="colorTip">
            <span className="colorTipContent">Sort</span>
            <span className="pointyTipShadow"></span>
            <span className="pointyTip"></span>
          </span>
        </i>
      </button>

      <div
        id="fab-sort-menu"
        className={`mdc-menu ${isShow && "mdc-menu--open"}`}
        tabIndex={-1}
        style={{ transformOrigin: "left top", left: 0, top: 0 }}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li
            data-value="sort.trackingCreateDate"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i
              className="fa fa-fw fa-sort-numeric-asc inactive"
              data-default-sort="asc"
            ></i>
             Started tracking
          </li>
          <li
            data-value="sort.MAX_delta"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i
              className="fa fa-fw fa-sort-numeric-asc inactive"
              data-default-sort="asc"
            ></i>
             Difference to desired price
          </li>
          <li
            data-value="sort.MAX_deltaCustom"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i
              className="fa fa-fw fa-sort-numeric-asc inactive"
              data-default-sort="asc"
            ></i>
             Change since last visit
          </li>
          <li
            data-value="sort.MAX_deltaTrackingCreated"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i
              className="fa fa-fw fa-sort-numeric-asc"
              data-default-sort="asc"
            ></i>
             Change since started tracking
          </li>
          <li
            data-value="sort.title"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i
              className="fa fa-fw fa-sort-alpha-asc inactive"
              data-default-sort="asc"
            ></i>
             Product title
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="grid"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={-1}
            aria-disabled="true"
          >
            <span>Click on any column header for other sort options</span>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Sort;
