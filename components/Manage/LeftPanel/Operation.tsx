"use client";
import React, { useState } from "react";

const Operation = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <li className="mdc-menu-anchor">
      <button
        id="fab-tasks"
        className="mdc-fab mdc-fab--mini"
        aria-label="Operations"
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-tasks mdc-fab__icon colorTipContainer manage-fab">
          <span className="colorTip">
            <span className="colorTipContent">Operations</span>
            <span className="pointyTipShadow"></span>
            <span className="pointyTip"></span>
          </span>
        </i>
      </button>

      <div
        id="fab-tasks-menu"
        className={`mdc-menu ${isShow && "mdc-menu--open"}`}
        tabIndex={-1}
        style={{ transformOrigin: "left top", left: 0, top: 0 }}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li
            className="mdc-list-item"
            role="menuitem"
            tabIndex={-1}
            aria-disabled="true"
          >
            Operations on selected trackings
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="task.delete"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i className="fa fa-fw fa-trash"></i> Delete (
            <span className="manage-active-results">71</span>)
          </li>
          <li
            data-value="task.export"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i className="fa fa-fw fa-floppy-o"></i> Export (
            <span className="manage-active-results">71</span>)
          </li>
          <li
            data-value="task.viewer"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <i className="fa fa-fw fa-th"></i> Open in Product Viewer (
            <span className="manage-active-results">71</span>)
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Operation;
