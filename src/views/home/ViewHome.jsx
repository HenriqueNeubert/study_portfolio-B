import React from "react";
import Banner from "../../components/banner/Banner";
import Technologies from "../../components/technologies/Technologies";
import Project from "../../components/project/Project";
import Study from "../../components/study/Study";

export default props => {
  return(
    <div>
      <Banner
      title="Me chamo Henrique Neubert, sou Desenvolvedor Front End Junior"
      description="lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"
      titleButton="GitHub"
      alignAll="center"
      >
      </Banner>
      <Technologies></Technologies>
      <Project></Project>
      <Study></Study>
    </div>
  )
}
