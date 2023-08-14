import Mainhed from "./Mainhed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  faPencil,
  fa2,
  fa3,
  faPlug,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import Feat from "./Feat";

function Features() {
  const icon = {
    icon1: fa1,
    icon2: faPencil,
    name: "GRAPHIC DESIGN",
    des: "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  };
  const icon2 = {
    icon1: fa2,
    icon2: faTv,
    name: "GRAPHIC DESIGN",
    des: "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  };
  const icon3 = {
    icon1: fa3,
    icon2: faPlug,
    name: "GRAPHIC DESIGN",
    des: "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  };
  const ele = {
    heading: "We are Good at",
    title: "SOME OF THESE STUFF UNDER",
  };
  return (
    <div className="features text-center pt-5 pb-5">
      <div className="container">
        <Mainhed ele={ele} />
        <div className="row">
          <Feat icon={icon} />
          <Feat icon={icon2} />
          <Feat icon={icon3} />
        </div>
      </div>
    </div>
  );
}
export default Features;
