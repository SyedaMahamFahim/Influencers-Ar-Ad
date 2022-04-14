import { AppWrapper } from "../appWrapper/index";
import {
  FirstCaseComponent,
    SecondCaseComponent
} from '../components/CaseStudyComponent/index'
const CaseStudy = () => {
  return (
    <>
      <div id="inner_content-12-10588" className="ct-inner-content">
       <FirstCaseComponent/>
       < SecondCaseComponent/>
   
      </div>
    </>
  );
};

export default AppWrapper(
    CaseStudy,
  "Arabia E-advertising | MENA Gaming and eSport Agency",
  "This is the descr Arabia E-advertising | MENA Gaming and eSport Agency"
);
