"use client";
import React, { useState } from "react";

const Setting = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <li className="mdc-menu-anchor">
      <button
        id="fab-settings"
        className="mdc-fab mdc-fab--mini"
        aria-label="Settings"
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-cog mdc-fab__icon colorTipContainer manage-fab">
          <span className="colorTip">
            <span className="colorTipContent">Settings</span>
            <span className="pointyTipShadow"></span>
            <span className="pointyTip"></span>
          </span>
        </i>
      </button>

      <div
        id="fab-settings-menu"
        className={`mdc-menu ${isShow && "mdc-menu--open"}`}
        tabIndex={-1}
        style={{ transformOrigin: "left top", left: 0, top: 0 }}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <span>
              <i className="fa fa-fw fa-eye"></i> View:
            </span>
            <div
              className="mdc-form-field"
              title="Show graphs with tracking data only"
            >
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="viewmode-0-radio"
                  name="viewmode"
                  value="DEFAULT"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label id="viewmode-0-radio1-label" htmlFor="viewmode-0-radio">
                Default
              </label>
            </div>
            <div className="mdc-form-field" title="Show full graphs">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="viewmode-1-radio"
                  name="viewmode"
                  value="COMFORTABLE"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label id="viewmode-1-radio1-label" htmlFor="viewmode-1-radio">
                Comfortable
              </label>
            </div>
            <div className="mdc-form-field" title="Show mini graph images">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="viewmode-2-radio"
                  name="viewmode"
                  value="COMPACT"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label id="viewmode-2-radio1-label" htmlFor="viewmode-2-radio">
                Compact
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="defaultgraphmode"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <span>
              <i className="fa fa-fw fa-line-chart"></i> Graphs:
            </span>
            <div
              className="mdc-form-field"
              title="Show graphs with tracking data only"
            >
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="defaultgraphmode-0-radio"
                  name="defaultgraphmode"
                  value="TRACKING"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="defaultgraphmode-0-radio1-label"
                htmlFor="defaultgraphmode-0-radio"
              >
                Tracking only
              </label>
            </div>
            <div className="mdc-form-field" title="">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="defaultgraphmode-1-radio"
                  name="defaultgraphmode"
                  value="CUSTOM"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="defaultgraphmode-1-radio1-label"
                htmlFor="defaultgraphmode-1-radio"
              >
                Custom
              </label>
            </div>
            <div className="types" style={{ display: "none" }}>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-0-checkbox"
                    name="defaultgraphmode-types"
                    value="0"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-0-checkbox">
                  Amazon
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-1-checkbox"
                    name="defaultgraphmode-types"
                    value="1"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-1-checkbox">New</label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-2-checkbox"
                    name="defaultgraphmode-types"
                    value="2"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-2-checkbox">Used</label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-3-checkbox"
                    name="defaultgraphmode-types"
                    value="3"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-3-checkbox">
                  Sales Rank
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-4-checkbox"
                    name="defaultgraphmode-types"
                    value="4"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-4-checkbox">
                  List Price
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-5-checkbox"
                    name="defaultgraphmode-types"
                    value="5"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-5-checkbox">
                  Collectible
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-6-checkbox"
                    name="defaultgraphmode-types"
                    value="6"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-6-checkbox">
                  Refurbished
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-7-checkbox"
                    name="defaultgraphmode-types"
                    value="7"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-7-checkbox">
                  New, 3rd Party FBM 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-8-checkbox"
                    name="defaultgraphmode-types"
                    value="8"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-8-checkbox">
                  Lightning Deals
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-9-checkbox"
                    name="defaultgraphmode-types"
                    value="9"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-9-checkbox">
                  Warehouse Deals
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-10-checkbox"
                    name="defaultgraphmode-types"
                    value="10"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-10-checkbox">
                  New, 3rd Party FBA
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-18-checkbox"
                    name="defaultgraphmode-types"
                    value="18"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-18-checkbox">
                  Buy Box 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-19-checkbox"
                    name="defaultgraphmode-types"
                    value="19"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-19-checkbox">
                  Used, like new 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-20-checkbox"
                    name="defaultgraphmode-types"
                    value="20"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-20-checkbox">
                  Used, very good 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-21-checkbox"
                    name="defaultgraphmode-types"
                    value="21"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-21-checkbox">
                  Used, good 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-22-checkbox"
                    name="defaultgraphmode-types"
                    value="22"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-22-checkbox">
                  Used, acceptable 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-28-checkbox"
                    name="defaultgraphmode-types"
                    value="28"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-28-checkbox">
                  eBay New 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-29-checkbox"
                    name="defaultgraphmode-types"
                    value="29"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-29-checkbox">
                  eBay Used 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-30-checkbox"
                    name="defaultgraphmode-types"
                    value="30"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-30-checkbox">
                  Trade-In
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-32-checkbox"
                    name="defaultgraphmode-types"
                    value="32"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-32-checkbox">
                  Buy Box Used 🚚
                </label>
              </div>
              <div className="mdc-form-field">
                <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                  <input
                    className="mdc-checkbox__native-control"
                    type="checkbox"
                    id="defaultgraphmode-types-33-checkbox"
                    name="defaultgraphmode-types"
                    value="33"
                  />
                  <div className="mdc-checkbox__background">
                    <svg
                      className="mdc-checkbox__checkmark"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="mdc-checkbox__checkmark-path"
                        fill="none"
                        stroke="white"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      ></path>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
                <label htmlFor="defaultgraphmode-types-33-checkbox">
                  New, Prime exclusive
                </label>
              </div>
              <button
                id="defaultgraphmode"
                className="mdc-button  mdc-button--primary"
                data-mdc-auto-init="MDCRipple"
                name="action"
              >
                Submit
              </button>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <span>
              <i className="fa fa-fw fa-calendar"></i> Range:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange-24-radio"
                  name="graphrange"
                  value="DAY"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange-24-radio1-label"
                htmlFor="graphrange-24-radio"
              >
                Day
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange-168-radio"
                  name="graphrange"
                  value="WEEK"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange-168-radio1-label"
                htmlFor="graphrange-168-radio"
              >
                Week
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange-744-radio"
                  name="graphrange"
                  value="MONTH"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange-744-radio1-label"
                htmlFor="graphrange-744-radio"
              >
                Month
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange-2160-radio"
                  name="graphrange"
                  value="QUARTER"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange-2160-radio1-label"
                htmlFor="graphrange-2160-radio"
              >
                3 Months
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange-8760-radio"
                  name="graphrange"
                  value="YEAR"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange-8760-radio1-label"
                htmlFor="graphrange-8760-radio"
              >
                Year
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="graphrange--1-radio"
                  name="graphrange"
                  value="ALL"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="graphrange--1-radio1-label"
                htmlFor="graphrange--1-radio"
              >
                All
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <span>
              <i className="fa fa-fw fa-calculator"></i> Sort/Filter reference:
            </span>
            <div className="mdc-form-field" title="">
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="sortfilterreference-0-radio"
                  name="sortfilterreference"
                  value="DEFAULT"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="sortfilterreference-0-radio1-label"
                htmlFor="sortfilterreference-0-radio"
              >
                Value
              </label>
            </div>
            <div
              className="mdc-form-field"
              title="Sorting or filtering any 'Difference ...' or 'Change ...' column will take the percentage value into account."
            >
              <div className="mdc-radio " data-mdc-auto-init="MDCRadio">
                <input
                  className="mdc-radio__native-control"
                  type="radio"
                  id="sortfilterreference-1-radio"
                  name="sortfilterreference"
                  value="PERCENTAGE"
                />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <label
                id="sortfilterreference-1-radio1-label"
                htmlFor="sortfilterreference-1-radio"
              >
                Percentage
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
        </ul>
      </div>
    </li>
  );
};

export default Setting;
