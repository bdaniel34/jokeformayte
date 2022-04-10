import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
export default function Myform() {
  return (
    <div>
      <form  className="Form">
        <input type="search"></input>
        <button className="right">enter</button>
      </form>
  

     
       
       
    </div>
  );
}
ReactDOM.render(<Myform />, document.getElementById("root"));
