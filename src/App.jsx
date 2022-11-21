import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Social from "./components/social/Social";
import { BiUpArrow } from "react-icons/bi";
import { BrowserRouter } from  'react-router-dom'
import Content from "./views/Content";

function App() {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <Social></Social>
        <a className="backToTop" href="">
          <BiUpArrow/>
        </a>
        <Header title="Henrique Neubert" backgroundColor="dark"></Header>
        <Content></Content>       
        <Footer
          copyRight="© 2022 henriqueneubert.dev@gmail.com"
          title="Henrique Neubert"
          backgroundColor="dark"
        >
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
