import React from "react";
import Info from "../../info.json";

function AboutUs() {
  return (
    <section className="section has-background-link" id="aboutUs">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width = "180px"
            height = "180px"
            src={Info.basics.picture}
            alt={Info.basics.name}
            className="is-rounded"
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Info.basics.x_title}
        </p>
        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Info.basics.summary}
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
