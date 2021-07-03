import React from "react";

export function Input(props) {
    return (
      <div className="form-group">
        <h1>Book Search</h1>  
        <input className="form-control" {...props} />
      </div>
    );
  }

  export function SearchBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }

  