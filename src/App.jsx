import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/banner/Banner";
import Technologies from "./components/technologies/Technologies";
import Social from "./components/social/Social";

function App() {
  return (
    <div className="App position-relative">
      <Header title="Henrique Neubert" backgroundColor="dark"></Header>
      <Banner
        title="Me chamo Henrique Neubert, sou Desenvolvedor Front End Junior"
        description="lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"
        titleButton="GitHub"
        alignAll="center"
      ></Banner>

      <section className="position-relative py-5 z-index-2 bgGradient">
        <Technologies></Technologies>
      </section>

      <Social></Social>

      <Footer
        copyRight="© 2022 henriqueneubert.dev"
        title="Henrique Neubert"
        backgroundColor="dark"
      ></Footer>
    </div>
  );
}

export default App;
