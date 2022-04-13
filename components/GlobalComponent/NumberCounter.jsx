import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NumberCounter = () => {
  return (
    <>
      <section id="section-38-10588" className=" ct-section counter-section">
        <div className="ct-section-inner-wrap">
          <div
            id="div_block-39-10588"
            className="ct-div-block counter-container"
          >
            <h2 id="headline-40-10588" className="ct-headline">
              Let the numbers speak
            </h2>
            <div id="text_block-41-10588" className="ct-text-block">
              We have worked with over 40 international known brands, delivering
              an influencer pool of over 70 influencers, and have created a
              stunning 1 billion Impressions to this day, with over 30 campaigns
              signed. Our community, as well as our partnerships with prominent
              businesses, is continuously expanding.
            </div>
            <div id="div_block-42-10588" className="ct-div-block counters">
              <div
                id="div_block-43-10588"
                className="ct-div-block single-counter-up"
              >
                <h4 id="headline-44-10588" className="ct-headline counter-head">
                  <CountUp start={0} end={200} duration={1} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span
                        id="span-45-10588"
                        className="ct-span counter"
                        ref={countUpRef}
                      > + </span>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h4>
                <div
                  id="text_block-46-10588"
                  className="ct-text-block counter-text"
                >
                  Campaigns
                </div>
              </div>
              <div
                id="div_block-47-10588"
                className="ct-div-block single-counter-up"
              >
                <h4 id="headline-48-10588" className="ct-headline counter-head">
                  
                  <CountUp start={0} end={40} duration={1} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span
                       id="span-49-10588" className="ct-span counter"
                        ref={countUpRef}
                      > + </span>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h4>
                <div
                  id="text_block-50-10588"
                  className="ct-text-block counter-text"
                >
                  Brands
                </div>
              </div>
              <div
                id="div_block-51-10588"
                className="ct-div-block single-counter-up"
              >
                <h4 id="headline-52-10588" className="ct-headline counter-head">
                 
                  <CountUp start={0} end={70} duration={1} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span
                      id="span-53-10588" className="ct-span counter"
                        ref={countUpRef}
                      > + </span>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h4>
                <div
                  id="text_block-54-10588"
                  className="ct-text-block counter-text"
                >
                  Exclusive Influencers
                </div>
              </div>
              <div
                id="div_block-55-10588"
                className="ct-div-block single-counter-up"
              >
                <h4 id="headline-56-10588" className="ct-headline counter-head">
                  
                  <CountUp start={0} end={50} duration={1} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span
                      id="span-57-10588" className="ct-span counter"
                        ref={countUpRef}
                      > M </span>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h4>
                <div
                  id="text_block-58-10588"
                  className="ct-text-block counter-text"
                >
                  Monthly Impressions
                </div>
              </div>
              <div
                id="div_block-59-10588"
                className="ct-div-block single-counter-up"
              >
                <h4 id="headline-60-10588" className="ct-headline counter-head">
                  <span id="span-61-10588" className="ct-span counter">
                    27
                  </span>
                  <CountUp start={0} end={27} duration={1} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span
                     id="span-61-10588" className="ct-span counter"
                        ref={countUpRef}
                      > M </span>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h4>
                <div
                  id="text_block-62-10588"
                  className="ct-text-block counter-text"
                >
                  Employees
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberCounter;
