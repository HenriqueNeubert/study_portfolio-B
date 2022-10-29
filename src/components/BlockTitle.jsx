import React from "react";

export default props =>{

  const align = {
    justifyContent: props.align
  }

  return(
    <div>
      <div className="container">
        <div className="d-flex" style={align}>
          <h3 className="fw-bold title--block">
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  )
}