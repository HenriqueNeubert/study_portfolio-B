import React from "react";
import "./Header.scss"

export default props =>{
  const style = {
    backgroundColor: props.backgroundColor,
  }

  return(
    <header class="py-3 header" style={style}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <img className="imageHeader" src="../../public/eu.jpeg" alt="" />
            <h2 className="fw-bold mb-0 mainEffect">
              {props.title}
            </h2>
          </div>
          <h4 className="mb-0">
            Front-end Developer
          </h4>
        </div>
      </div>
    </header>
  )
}