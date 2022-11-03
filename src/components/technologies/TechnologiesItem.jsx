import React from "react";
import "./Technologies.scss";
import { DiBootstrap, DiHtml5, DiCss3 } from "react-icons/di";

export default (props) => {

  return (
    <>
      <div className="technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiBootstrap />
          </div>
          <p className="mb-0 mt-3">BOOTSTRAP</p>
        </div>
      </div>

      <div className="technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiHtml5 />
          </div>
          <p className="mb-0 mt-3">HTML 5</p>
        </div>
      </div>

      <div className="technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiCss3 />
          </div>
          <p className="mb-0 mt-3">CSS 3</p>
        </div>
      </div>
    </>
  );
};





