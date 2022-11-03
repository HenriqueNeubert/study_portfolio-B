import React from "react";

export default props =>{

  const align = {
    justifyContent: props.align
  }

  const border = {
    borderColor: props.border
  }

  return(
    <div>
      <div className="container">
        <div className="d-flex" style={align}>
          <h3 className="fw-bold title--block" style={border}>
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  )
}