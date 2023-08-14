import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHippo,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function Feat(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="icon-holder position-relative">
        <FontAwesomeIcon
          icon={props.icon.icon1}
          className="position-absolute bottom-0 number"
        />
        <FontAwesomeIcon
          icon={props.icon.icon2}
          className="position-absolute bottom-0 fa-4x icon"
        />
      </div>
      <h4 className="mb-3 mt-3 text-uppercase">{props.icon.name}</h4>
      <p className="text-black-50 lh-lg">{props.icon.des}</p>
    </div>
  );
}
export default Feat;
