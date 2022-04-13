import {
  FirstHomeComponent,
  SecondHomeComponent,
  ThirdHomeComponent,
  FourthHomeComponent,
  FifthHomeComponent,
} from "../components/HomeComponents/index";

import { AppWrapper } from "../appWrapper/index";

const Home = () => {
  return (
    <>
      <div id="inner_content-12-10588" className="ct-inner-content">
        <FirstHomeComponent />
        <SecondHomeComponent />
        <ThirdHomeComponent />
        <FourthHomeComponent />
        <FifthHomeComponent />
      </div>
    </>
  );
};

export default AppWrapper(
  Home,
  "Arabia E-advertising | MENA Gaming and eSport Agency",
  "This is the descr Arabia E-advertising | MENA Gaming and eSport Agency"
);
