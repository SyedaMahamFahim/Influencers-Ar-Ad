import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  <p
                    color="black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <GiHamburgerMenu />
                  </p>
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
                            
                          </a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-10501"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10501"
                      >
                        <Link href="/case-study">
                          <a>
                            Case Studies
                            
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
                            hrefLang="zh-CN"
                            lang="zh-CN"
                          >
                            中文 (中国)
                            
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

      {isMobileMenuOpen && (
        <div className={`${styles.mobile_header_container}`}>
          <div className={`${styles.mobile_header_box}`}>
            <div
              className={`${styles.mobile_header__top}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ImCross /> close
            </div>
            <div className={`${styles.mobile_header__top}`}>
              <nav
                className={`text-[20px] font-medium md:ml-auto flex flex-cloumn items-center justify-center ${styles.mobile_header_navbar}`}
              >
                <Link href="/">
                  Home
                </Link>
                <Link href="/services">
                  Services
                </Link>
                <Link href="/influencers">
                  Influencers
                </Link>
                <Link href="/esports-talents">
                   On-Air Talents
                </Link>
                <Link href="/case-study">
                  Case Studies
                </Link>
                <Link href="/about-us">
                About us
                </Link>
                <Link href="/about-us">
                          <a
                            href="https://influencers.ar-ad.com/zh/"
                            hrefLang="zh-CN"
                            lang="zh-CN"
                          >
                            中文 (中国)
                            
                          </a>
                        </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
