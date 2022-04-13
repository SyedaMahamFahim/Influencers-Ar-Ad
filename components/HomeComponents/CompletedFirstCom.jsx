import React, { useState, useEffect } from "react";
import { MotionWrap } from "../../appWrapper/index";
import { motion, AnimatePresence } from "framer-motion";

// fade-out
const FirstHomeComponent = () => {
  const images = [
    "/assests/images/MaskGroup1.png",
    "/assests/images/MaskGroup2.png",
  ];

  const BrandsGroups = [
    {
      id: 0,
      url: "/assests/images/MaskGroup1.png",
    },
    {
      id: 1,
      url: "/assests/images/MaskGroup2.png",
    },
  ];

  const [currentImage, setCurrentImage] = useState(
    "/assests/images/MaskGroup1.png"
  );
  const [brandImg, setBrandImg] = useState(BrandsGroups);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        images[Math.floor(Math.random() * images.length)]
      );
      setBrandImg(
        BrandsGroups[Math.floor(Math.random() * BrandsGroups.length)]
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
      <section
        id="section-38-10495"
        className=" ct-section agency-section background-design-1"
      >
        <div className="ct-section-inner-wrap">
          <div id="div_block-40-10495" className="ct-div-block box-content">
            <div
              id="div_block-156-10495"
              className="ct-div-block content-box-inner div-mb-rtion"
            >
              <h2
                id="headline-52-10495"
                className="ct-headline aos-init aos-animate"
              >
                Gaming &amp; Esports Talent Agency
              </h2>
              <h2
                id="headline-54-10495"
                className="ct-headline aos-init aos-animate"
              >
                #Connect Your Brand With Arabic Millennials.
              </h2>
              <div
                id="div_block-56-10495"
                className="ct-div-block aos-init aos-animate"
              >
                <div
                  id="div_block-57-10495"
                  className="ct-div-block sk-icon-img"
                >
                  <img
                    id="image-65-10495"
                    alt=""
                    src="https://influencers.ar-ad.com/wp-content/uploads/2021/06/user.png"
                    className="ct-image talent-icon"
                  />
                  <div
                    id="div_block-633-10495"
                    className="ct-div-block oxel_number_counter"
                  >
                    <div
                      id="code_block-634-10495"
                      className="ct-code-block"
                    ></div>
                    <div
                      id="text_block-635-10495"
                      className="ct-text-block oxel_number_counter__number"
                      data-counter-started="true"
                    >
                      70
                    </div>
                    <div
                      id="text_block-636-10495"
                      className="ct-text-block oxel_number_counter__label"
                    >
                      + Talents
                    </div>
                  </div>
                </div>
                <div
                  id="div_block-61-10495"
                  className="ct-div-block sk-icon-img"
                >
                  <img
                    id="image-66-10495"
                    alt=""
                    src="https://influencers.ar-ad.com/wp-content/uploads/2021/06/earth-globe.png"
                    className="ct-image talent-icon"
                  />
                  <div
                    id="div_block-637-10495"
                    className="ct-div-block oxel_number_counter"
                  >
                    <div
                      id="code_block-638-10495"
                      className="ct-code-block"
                    ></div>
                    <div
                      id="text_block-639-10495"
                      className="ct-text-block oxel_number_counter__number"
                      data-counter-started="true"
                    >
                      100
                    </div>
                    <div
                      id="text_block-640-10495"
                      className="ct-text-block oxel_number_counter__label"
                    >
                      M Total Reach
                    </div>
                  </div>
                </div>
              </div>
              {console.log(brandImg)}
              <div id="div_block-626-10495">
                <div id="div_block-669-10495" className="ct-div-block">
                  <a
                    id="link-691-10495"
                    className="ct-link"
                    href="https://www.pubgmobile.com/ar/home.shtml"
                  >
                    <img
                      id="image-670-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_01.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-694-10495"
                    className="ct-link"
                    href="https://www.ea.com/"
                    target="_self"
                  >
                    <img
                      id="image-671-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_02.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-697-10495"
                    className="ct-link"
                    href="https://www.riotgames.com/"
                    target="_self"
                  >
                    <img
                      id="image-672-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_03.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-698-10495"
                    className="ct-link"
                    href="https://www.moonton.com/"
                    target="_self"
                  >
                    <img
                      id="image-673-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_04.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-699-10495"
                    className="ct-link"
                    href="https://www.huawei.com/"
                    target="_self"
                  >
                    <img
                      id="image-674-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/11/huawei.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-703-10495"
                    className="ct-link"
                    href="https://global.redmagic.gg/"
                    target="_self"
                  >
                    <img
                      id="image-675-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/11/redmagic-phone.png"
                      className="ct-image"
                    />
                  </a>
                  <a
                    id="link-690-10495"
                    className="ct-link"
                    href="https://influencers.ar-ad.com/case-study/"
                    target="_blank"
                  >
                    <img
                      id="image-676-10495"
                      alt=""
                      src="https://influencers.ar-ad.com/wp-content/uploads/2021/11/and-much-more.png"
                      className="ct-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              id="div_block-630-10495"
              className="ct-div-block aos-init aos-animate"
            >
              <img
                id="image-97-10495"
                alt=""
                src={currentImage}
                className={`ct-image box-content-1-bg 
                      
                       `}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MotionWrap(FirstHomeComponent);
