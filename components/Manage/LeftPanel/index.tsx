import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import Filter from "./Filter";
import Operation from "./Operation";
import Setting from "./Setting";

const index = () => {
  return (
    <div id="grid-tools-fab-manage" className="grid-wrapper-tools-fab" style={{ position: 'relative' }}>
      <ul className="tools-fab-floating">
        <Search></Search>
        <Sort></Sort>
        <Filter></Filter>
        <Operation></Operation>
        <Setting></Setting>
        <li>
          <button
            id="fab-reset"
            className="mdc-fab mdc-fab--mini"
            aria-label="Reset filter &amp; search"
            style={{ display: "none" }}
          >
            <i className="fa fa-undo mdc-fab__icon colorTipContainer manage-fab">
              <span className="colorTip">
                <span className="colorTipContent">
                  Reset filter &amp; search
                </span>
                <span className="pointyTipShadow"></span>
                <span className="pointyTip"></span>
              </span>
            </i>
          </button>
        </li>
        <li>
          <button
            id="fab-refresh"
            className="mdc-fab mdc-fab--mini"
            aria-label="Refresh filter &amp; sort"
            style={{ display: "none" }}
          >
            <i className="fa fa-refresh mdc-fab__icon colorTipContainer manage-fab">
              <span className="colorTip">
                <span className="colorTipContent">
                  Refresh filter &amp; sort
                </span>
                <span className="pointyTipShadow"></span>
                <span className="pointyTip"></span>
              </span>
            </i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default index;
