import React from "react";
import "./header.scss";

const Menu = () => {
  return (
    <div className="mt-10 d-header-wrap drop-down-mode ember-view">
      <div className="d-header">
        <div className="wrap">
          <div className="contents">
            <div className="before-header-logo-outlet"></div>
            <div className="home-logo-wrapper-outlet">
              <div id="ember148" className="ember-view">
                <div className="title">
                  <a href="/" data-auto-route="true">
                    <img
                      src="https://discuss.keepa.com/uploads/default/original/2X/9/9ef8e02b2e83ee0a9872c2f3285c57a94dba509f.png"
                      alt="Keepa Community Forums"
                      id="site-logo"
                      className="logo-big"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="before-header-panel-outlet"></div>

            <div className="panel" role="navigation">
              <span className="header-buttons"></span>
              <ul className="icons d-header-icons">
                <li className="header-dropdown-toggle search-dropdown">
                  <a
                    aria-expanded="false"
                    aria-haspopup="true"
                    href="/search"
                    data-auto-route="true"
                    title="Search"
                    aria-label="Search"
                    id="search-button"
                    className="icon btn-flat"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="header-dropdown-toggle hamburger-dropdown">
                  <a
                    aria-expanded="false"
                    aria-haspopup="true"
                    href=""
                    data-auto-route="true"
                    title="menu"
                    aria-label="menu"
                    id="toggle-hamburger-menu"
                    className="icon btn-flat"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  id="current-user"
                  className="header-dropdown-toggle current-user"
                >
                  <a
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/u/nrmperius"
                    aria-label="nrmperius's account"
                    data-auto-route="true"
                    className="icon btn-flat"
                  >
                    <div>
                      <img
                        alt="profile, messages, bookmarks and preferences"
                        width="48"
                        height="48"
                        src="/letter_avatar_proxy/v4/letter/n/eada6e/48.png"
                        title="nrmperius"
                        aria-hidden="true"
                        loading="lazy"
                        tabIndex={-1}
                        className="avatar"
                      />
                      <div className="header-user-tip-shim">
                        <div></div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
