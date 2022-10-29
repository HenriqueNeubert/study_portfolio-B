import React from "react";
import "./Technologies.scss";
import TechnologiesItem from "./TechnologiesItem"

export default (props) => {

  return (
    <div class="technologies">
      <div className="container">
        <div className="d-flex justify-content-center row row-cols-4">
          <TechnologiesItem>
            
          </TechnologiesItem>
        </div>
      </div>
    </div>
  );
};
