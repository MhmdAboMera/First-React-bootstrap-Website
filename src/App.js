import Navbar from "./components/Navbar";
import logo from "./logo.svg";
// import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Ourwork from "./components/Ourwork";
import Stuff from "./components/Stuff";
import Team from "./components/Team";
import Techs from "./components/Techs";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Features />
      <Ourwork />
      <Stuff />
      <Team />
      <Techs />
      <Project />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
