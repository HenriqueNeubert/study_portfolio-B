import React from "react";

export default props =>{
  const style = {
    backgroundColor: props.backgroundColor,
  }

  return(
    <div class="py-5" style={style}>
      <div className="container">
        <h1 className="fw-bold">
          {props.title}
        </h1>
      </div>
    </div>
  )
}