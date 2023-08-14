import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHippo,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top align-items-center">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <a className="btn btn-primary rounded-pill" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
