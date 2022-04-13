import React from "react";
import Head from "next/head";
import {
  Header,
  NumberCounter,
  OurPlatforms,
  StartACampaign,
  Footer,
} from "../components/GlobalComponent";
import { motion } from "framer-motion";

const AppWrapper = (Components, metaTitle, metaDesc) =>
  function HOC() {
    return (
      <>
        <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDesc} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&family=Inter:wght@300&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:wght@200;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="home page-template-default page page-id-10495  wp-embed-responsive oxygen-body oxygen-aos-enabled">
          <Header />
          <Components />
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <NumberCounter />
          </motion.div>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <OurPlatforms />
          </motion.div>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <StartACampaign />
          </motion.div>
          <Footer />
        </div>
      </>
    );
  };

export default AppWrapper;
