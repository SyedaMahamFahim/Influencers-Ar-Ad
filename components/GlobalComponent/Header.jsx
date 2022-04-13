import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        id="_header-2-10588"
        className="oxy-header-wrapper oxy-overlay-header oxy-header site-header"
      >
        <div id="_header_row-3-10588" className="oxy-header-row">
          <div className="oxy-header-container">
            <div id="_header_left-4-10588" className="oxy-header-left">
              <Link href="/">
                <a id="link-5-10588" className="ct-link">
                  <img
                    id="image-6-10588"
                    alt=""
                    src="https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png"
                    className="ct-image"
                    srcset=""
                    sizes="(max-width: 236px) 100vw, 236px"
                  />
                </a>
              </Link>
            </div>
            <div id="_header_center-7-10588" className="oxy-header-center">
              <div id="-pro-menu-8-10588" className="oxy-pro-menu ">
                <div
                  className="oxy-pro-menu-mobile-open-icon "
                  data-off-canvas-alignment=""
                >
                  <svg id="-pro-menu-8-10588-open-icon"></svg>
                </div>

                <div className="oxy-pro-menu-container  oxy-pro-menu-dropdown-links-visible-on-mobile oxy-pro-menu-dropdown-links-toggle oxy-pro-menu-show-dropdown oxy-pro-menu-init">
                  <div className="menu-main-container">
                    <ul id="menu-main" className="oxy-pro-menu-list">
                      <li
                        id="menu-item-10500"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10495 current_page_item menu-item-10500"
                      >
                        <Link href="/">
                          <a>
                            Home
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10503"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10503"
                      >
                        <Link href="/services">
                          <a>
                            Services
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10718"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10718"
                      >
                        <Link href="/influencers">
                          <a>
                            Influencers
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10717"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10717"
                      >
                        <Link href="/esports-talents">
                          <a>
                            On-Air Talents
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10501"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10501"
                      >
                        <Link href="/case-study">
                          <a href="https://influencers.ar-ad.com/case-study/">
                            Case Studies
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10502"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10502"
                      >
                        <Link href="/about-us">
                          <a>
                            About us
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10880-zh"
                        className="lang-item lang-item-123 lang-item-zh lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-10880-zh"
                      >
                        <Link href="/about-us">
                          <a
                            href="https://influencers.ar-ad.com/zh/"
                            hreflang="zh-CN"
                            lang="zh-CN"
                          >
                            中文 (中国)
                            <div className="oxy-pro-menu-dropdown-icon-click-area"></div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="oxy-pro-menu-mobile-close-icon">
                    <svg id="svg--pro-menu-8-10588"></svg>
                    close
                  </div>
                </div>
              </div>
            </div>
            <div id="_header_right-9-10588" className="oxy-header-right">
              <div
                id="div_block-10-10588"
                className="ct-div-block border-effect"
              >
                <a
                  id="link_button-11-10588"
                  className="ct-link-button contact-btn orange-btn trigger-cta-modal"
                  href="http://"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
