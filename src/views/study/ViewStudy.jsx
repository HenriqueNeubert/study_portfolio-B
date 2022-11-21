import BlockTitle from "../../components/BlockTitle";
import ItemBlock from "../../components/ItemBlock";
import React from "react";

export default props => {
  return(
    <section className="py-5 bgGradient2">
      <div className="py-lg-5 container mainEffect mainEffect mainEffect--secondary">
        <BlockTitle title="ESTUDOS" align="center" color="#ffffff" />
        <div className="gap-3 d-flex justify-content-center BlockList mt-3 row">
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
        </div>
      </div>
    </section>
  )
}
