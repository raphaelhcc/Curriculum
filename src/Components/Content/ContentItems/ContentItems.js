import React from 'react';
import "./ContentItems.css";

function ContentItems(props) {
    return (
    <div className="ItemTitle"> 
    <div className="Text1">
      <h2>{props.title}</h2>
      </div>
      <div className="line">
      <hr ></hr>
      </div>
    </div>
    );
  }
  
  export default ContentItems;
  