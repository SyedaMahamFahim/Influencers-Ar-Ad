import { AppWrapper } from "../appWrapper/index";
import {
  FirstServiceComponent,
  SecondServiceComponent,
  ThirdServiceComponent

} from '../components/ServicesComponents/index'


const Services = () => {
  return (
    <>
      <div id="inner_content-12-10588" className="ct-inner-content">
       <FirstServiceComponent/>
       <SecondServiceComponent/>
       <ThirdServiceComponent/>

      </div>
      
    </>
  );
};

export default AppWrapper(
    Services,
  "Arabia E-advertising | MENA Gaming and eSport Agency",
  "This is the descr Arabia E-advertising | MENA Gaming and eSport Agency"
);
