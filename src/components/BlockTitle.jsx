import React from "react";

export default props =>{

  const align = {
    justifyContent: props.align
  }

  const color = {
    color: props.color
  }

  return(
    <div>
      <div className="d-flex" style={align}>
        <h3 className="fw-bold title--block" style={color}>
          {props.title}
        </h3>
      </div>
    </div>
  )
}