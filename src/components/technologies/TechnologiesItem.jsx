import React from "react";
import "./Technologies.scss";
import { DiBootstrap, DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { SiSass, SiJquery } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default (props) => {

  return (
    <> 
      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiBootstrap />
          </div>
          <p className="mb-0 mt-3">BOOTSTRAP</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiHtml5 />
          </div>
          <p className="mb-0 mt-3">HTML 5</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiCss3 />
          </div>
          <p className="mb-0 mt-3">CSS 3</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <SiSass />
          </div>
          <p className="mb-0 mt-3">SASS</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <DiJavascript />
          </div>
          <p className="mb-0 mt-3">JAVASCRIPT</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <SiJquery />
          </div>
          <p className="mb-0 mt-3">JQUERY</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-6 technologies--item g-3 align-self-stretch">
        <div className="d-flex flex-column justify-content-center text-center flex-column p-4 h-100">
          <div>
            <BsGithub />
          </div>
          <p className="mb-0 mt-3">GITHUB</p>
        </div>
      </div>
    </>
  );
};





