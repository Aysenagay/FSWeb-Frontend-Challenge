import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ModeSwitch />
      <Header />
      <Bio />
      <div id="skills"></div>
      <Skills />
      <Profile />
      <div id="project"></div>
      <Project />
      <div id="footer"></div>
      <Footer />
    </div>
  );
}

export default App;
