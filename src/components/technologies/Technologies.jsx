import React from "react";
import "./Technologies.scss";
import TechnologiesItem from "./TechnologiesItem";
import BlockTitle from "../../components/BlockTitle";

export default (props) => {
  return (
    <section class="technologies py-5 z-index-2 bgGradient">
      <div className="container">
        <BlockTitle title="TÉCNOLOGIAS" align="start" />
        <div className="technologiesCarroussel d-flex justify-content-center row row-cols-3">
          <TechnologiesItem></TechnologiesItem>
        </div>
      </div>
    </section>
  );
};
