import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import "./Banner.scss"

export default (props) => {
  const style = {
    backgroundColor: props.backgroundColor,
  };

  const align = {
    textAlign: props.alignAll,
    justifyContent: props.alignAll
  }

  return (
    <div class="py-5 mainBanner d-flex align-items-center" style={style}>
      <div className="container py-lg-5 py-0">
        <div className="d-flex" style={align}>
          <div className="d-flex flex-column col-lg-6" style={align}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="pt-4">
              <ButtonPrimary {...props}/>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

