"use client";
import React, { useState } from "react";

const Filter = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="mdc-menu-anchor">
      <button
        id="fab-filter"
        className="mdc-fab mdc-fab--mini"
        aria-label="Filter"
        onClick={() => setIsShow(!isShow)}
      >
        <i className="fa fa-filter mdc-fab__icon colorTipContainer manage-fab">
          <span className="colorTip">
            <span className="colorTipContent">Filter</span>
            <span className="pointyTipShadow"></span>
            <span className="pointyTip"></span>
          </span>
        </i>
      </button>

      <div
        id="fab-filter-menu"
        className={`mdc-menu ${isShow && "mdc-menu--open"}`}
        tabIndex={-1}
        style={{ transformOrigin: "left top", left: 0, top: 0 }}
      >
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li
            data-value="multiDomainIds"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <span>
              <i className="fa fa-fw fa-amazon"></i> Amazon locale:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="multiDomainIds-0-checkbox"
                  name="multiDomainIds"
                  value="com"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="multiDomainIds-0-checkbox">
                com <span>(71)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="rootCategoryName"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <span>
              <i className="fa fa-fw fa-folder-o"></i> Categories:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-all-checkbox"
                  name="rootCategoryName"
                  value="-1"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-all-checkbox">
                Select / Deselect all
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-0-checkbox"
                  name="rootCategoryName"
                  value="-"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-0-checkbox">
                - <span>(3)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-1-checkbox"
                  name="rootCategoryName"
                  value="Baby Products"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-1-checkbox">
                Baby Products <span>(1)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-2-checkbox"
                  name="rootCategoryName"
                  value="Clothing, Shoes &amp; Jewelry"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-2-checkbox">
                Clothing, Shoes &amp; Jewelry <span>(10)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-3-checkbox"
                  name="rootCategoryName"
                  value="Grocery &amp; Gourmet Food"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-3-checkbox">
                Grocery &amp; Gourmet Food <span>(3)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-4-checkbox"
                  name="rootCategoryName"
                  value="Home &amp; Kitchen"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-4-checkbox">
                Home &amp; Kitchen <span>(1)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-5-checkbox"
                  name="rootCategoryName"
                  value="Sports &amp; Outdoors"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-5-checkbox">
                Sports &amp; Outdoors <span>(2)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-6-checkbox"
                  name="rootCategoryName"
                  value="Toys &amp; Games"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-6-checkbox">
                Toys &amp; Games <span>(50)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="rootCategoryName-7-checkbox"
                  name="rootCategoryName"
                  value="Video Games"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="rootCategoryName-7-checkbox">
                Video Games <span>(1)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="conditionsMet"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <span>
              <i className="fa fa-fw fa-check"></i> Conditions met:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="conditionsMet-0-checkbox"
                  name="conditionsMet"
                  value="Not yet"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="conditionsMet-0-checkbox">
                Not yet <span>(63)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="conditionsMet-1-checkbox"
                  name="conditionsMet"
                  value="Yes!"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="conditionsMet-1-checkbox">
                Yes! <span>(8)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="csvTypesWithTracking"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <span>
              <i className="fa fa-fw fa-bell-o"></i> Active trackings:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="csvTypesWithTracking-0-checkbox"
                  name="csvTypesWithTracking"
                  value="Amazon"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="csvTypesWithTracking-0-checkbox">
                Amazon <span>(71)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="csvTypesWithTracking-1-checkbox"
                  name="csvTypesWithTracking"
                  value="Buy Box 🚚"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="csvTypesWithTracking-1-checkbox">
                Buy Box 🚚 <span>(4)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="csvTypesWithTracking-2-checkbox"
                  name="csvTypesWithTracking"
                  value="Lightning Deals"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="csvTypesWithTracking-2-checkbox">
                Lightning Deals <span>(38)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <span>
              <i className="fa fa-fw fa-clock-o"></i> Expires soon:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="expiresSoon-0-checkbox"
                  name="expiresSoon"
                  value="No"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="expiresSoon-0-checkbox">
                No <span>(67)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="expiresSoon-1-checkbox"
                  name="expiresSoon"
                  value="Yes"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="expiresSoon-1-checkbox">
                Yes <span>(4)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li className="mdc-list-item" role="menuitem" tabIndex={0}>
            <span>
              <i className="fa fa-fw fa-arrows-v"></i> Tracking type:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="trackingTypes-0-checkbox"
                  name="trackingTypes"
                  value="Drop"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="trackingTypes-0-checkbox">
                Drop <span>(70)</span>
              </label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="trackingTypes-1-checkbox"
                  name="trackingTypes"
                  value="Increase"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="trackingTypes-1-checkbox">
                Increase <span>(1)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="tags"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <span>
              <i className="fa fa-fw fa-tags"></i> Tags:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="tags-0-checkbox"
                  name="tags"
                  value="#null#"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="tags-0-checkbox">
                (none) <span>(71)</span>
              </label>
            </div>
          </li>
          <li className="mdc-list-divider"></li>
          <li
            data-value="wishListName"
            className="mdc-list-item"
            role="menuitem"
            tabIndex={0}
          >
            <span>
              <i className="fa fa-fw fa-heart-o"></i> Wish List:
            </span>
            <div className="mdc-form-field">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox">
                <input
                  className="mdc-checkbox__native-control"
                  type="checkbox"
                  id="wishListName-0-checkbox"
                  name="wishListName"
                  value="-"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
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
              <label htmlFor="wishListName-0-checkbox">
                (No Wish List) <span>(71)</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Filter;
