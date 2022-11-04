import React from "react";
import "./Technologies.scss";
import TechnologiesItem from "./TechnologiesItem";
import BlockTitle from "../../components/BlockTitle";

export default (props) => {
  return (
    <section className="technologies py-5 z-index-2 bgGradient">
      <div className="py-lg-5 container">
        <div className="mainEffect mainEffect--secondary">
          <BlockTitle title="TÉCNOLOGIAS" align="start" color="#ffffff" />
        </div>
        <div className="technologiesCarroussel mt-3 d-flex justify-content-around row">
          <TechnologiesItem></TechnologiesItem>
        </div>
      </div>
    </section>
  );
};
