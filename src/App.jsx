import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/banner/Banner";
import Technologies from "./components/technologies/Technologies";
import Project from "./components/project/Project";
import Social from "./components/social/Social";
import { BiUpArrow } from "react-icons/bi";

function App() {
  return (
    <div className="App position-relative">
      <Social></Social>
      <a className="backToTop" href="">
        <BiUpArrow/>
      </a>
      <Header title="Henrique Neubert" backgroundColor="dark"></Header>
      <Banner
        title="Me chamo Henrique Neubert, sou Desenvolvedor Front End Junior"
        description="lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"
        titleButton="GitHub"
        alignAll="center"
      ></Banner>

      <Technologies></Technologies>

      <Project></Project>

      <Footer
        copyRight="© 2022 henriqueneubert.dev@gmail.com"
        title="Henrique Neubert"
        backgroundColor="dark"
      ></Footer>
    </div>
  );
}

export default App;
