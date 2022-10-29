import React from "react";
import "./Buttons.scss"

export default (props) => {

  const align = {
    textAlign: props.alignAll,
    justifyContent: props.alignAll
  }

  return (
    <div className="d-flex" style={align}>
      <button href="#" className="btn px-5 py-3">
        <p className="mb-0 text-white">{props.titleButton}</p>
      </button>
    </div>
  );
};
