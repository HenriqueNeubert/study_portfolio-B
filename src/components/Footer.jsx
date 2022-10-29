import React from "react";

export default props =>{
  const style = {
    backgroundColor: props.backgroundColor,
  }

  return(
    <footer class="py-2" style={style}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">
            {props.copyRight}
          </p>
          <p className="fw-bold">
            {props.title}
          </p>
        </div>
      </div>
    </footer>
  )
}