import React from "react";

function TestimonialItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-64x64">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <h1 className="title is-4">{props.name}</h1>
        <h3 className="title is-5"> {props.institution}</h3>
        <p style={{maxWidth: '25em'}}>{props.details}</p>
      </div>
    </div>
  );
}

export default TestimonialItem
