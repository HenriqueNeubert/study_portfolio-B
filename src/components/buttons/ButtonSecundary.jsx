import React from "react";
import "./Buttons.scss"
import { Link } from 'react-router-dom'

export default (props) => {

  const align = {
    textAlign: props.alignAll,
    justifyContent: props.alignAll
  }

  return (
    <div className="d-flex" style={align}>
      <Link to="/study" className="btnSecondary btn btn-sm px-5 py-3">
        <p className="mb-0 text-white">{props.titleButton}</p>
      </Link>
    </div>
  );
};
