import React from "react";

export default props => {
  return(
    <div className="BlockItem col-md-4 d-flex flex-column align-items-center">
      <a href="#">
        <img src="../../../public/eu.jpeg" alt="" />
      </a>  
      <a className="text-decoration-none mainEffectText" href="#">
        <h5 className="mt-4 mb-0 decoration text-white text-decoration-none">{props.name}</h5>
      </a>
    </div>
  )
}