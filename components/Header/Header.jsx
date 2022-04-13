import React from "react";
import Link from "next/link";   
import styles from "./header.module.css";

const MobileHeader = () => {
  return (
    <>
      <div className={`${styles.mobile_header_container}`}>
        <div className={`${styles.mobile_header_box}`}>
          <div className={`${styles.mobile_header__top}`}>
            <ImCross />
          </div>
          <div className={`${styles.mobile_header__top}`}>
            <nav className="font-poppins hidden lg:block font-poppins text-[20px] font-medium md:ml-auto md:mr-auto flex items-center justify-center">
              {NavLinks.map((val) => (
                <NavLinksComponent
                  pageTitle={val.pageName}
                  key={val.id}
                  url={val.url}
                />
              ))}
              <a
                href=""
                className={`mr-8 hover:text-orange cursor-pointer ${styles.nav_links}`}
              >
                中文 (中国)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header
        id="_header-2-10588"
        class={`${styles.desktop_header} oxy-header-wrapper oxy-overlay-header oxy-header site-header`}
      >
        <div id="_header_row-3-10588" class="oxy-header-row">
          <div class="oxy-header-container">
            <div id="_header_left-4-10588" class="oxy-header-left">
              <a
                id="link-5-10588"
                class="ct-link"
                href="https://influencers.ar-ad.com/home/"
              >
                <img
                  id="image-6-10588"
                  alt=""
                  src="https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png"
                  class="ct-image"
               
                  sizes="(max-width: 236px) 100vw, 236px"
                />
              </a>
            </div>
            <div >
              <div >
               

                <div
                  class="oxy-pro-menu-container  oxy-pro-menu-dropdown-links-visible-on-mobile oxy-pro-menu-dropdown-links-toggle oxy-pro-menu-show-dropdown oxy-pro-menu-init"
                  
                >
                  <div class="menu-main-container">
                    <ul id="menu-main" class="oxy-pro-menu-list">
                      <li
                        id="menu-item-10500"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10495 current_page_item menu-item-10500"
                      >
                        <a
                          href="https://influencers.ar-ad.com/"
                          aria-current="page"
                        >
                          Home
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10503"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10503"
                      >
                        <a href="https://influencers.ar-ad.com/services/">
                          Services
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10718"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10718"
                      >
                        <a href="https://influencers.ar-ad.com/influencers/">
                          Influencers
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10717"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10717"
                      >
                        <a href="https://influencers.ar-ad.com/esports-talents/">
                          On-Air Talents
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10501"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10501"
                      >
                        <a href="https://influencers.ar-ad.com/case-study/">
                          Case Studies
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10502"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10502"
                      >
                        <a href="https://influencers.ar-ad.com/about-us/">
                          About us
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                      <li
                        id="menu-item-10880-zh"
                        class="lang-item lang-item-123 lang-item-zh lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-10880-zh"
                      >
                        <a
                          href="https://influencers.ar-ad.com/zh/"
                          hrefLang="zh-CN"
                          lang="zh-CN"
                        >
                          中文 (中国)
                          <div class="oxy-pro-menu-dropdown-icon-click-area"></div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="oxy-pro-menu-mobile-close-icon">
                    <svg id="svg--pro-menu-8-10588">
                    </svg>
                    close
                  </div>
                </div>
              </div>
            </div>
            <div id="_header_right-9-10588" class="oxy-header-right">
              <div id="div_block-10-10588" class="ct-div-block border-effect">
                <a
                  id="link_button-11-10588"
                  class="ct-link-button contact-btn orange-btn trigger-cta-modal"
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
