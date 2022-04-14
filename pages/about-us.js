import { AppWrapper } from "../appWrapper/index";
import {
  FirstAboutComponent,
  SecondAboutComponent,
} from "../components/AboutComponents/index";

const AboutUs = () => {
  return (
    <>
      <div id="inner_content-12-10588" className="ct-inner-content">
        <FirstAboutComponent />
        <SecondAboutComponent />
      </div>
    </>
  );
};

export default AppWrapper(
  AboutUs,
  "Arabia E-advertising | MENA Gaming and eSport Agency",
  "This is the descr Arabia E-advertising | MENA Gaming and eSport Agency"
);
