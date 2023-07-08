import React from "react";

const About = (props) => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className={`card text-${
          props.mode === "light" ? "black" : "white"
        } bg-${props.mode}`}
        style={{ width: "50rem", marginTop: "36px" }}
      >
        <div className="card-body">
          <h5 className="card-title">AdviceWala - About</h5>
          <p className="card-text">
            AdviceWala application is a random advice text providing
            application. It was created in ReactJS Library as a personal
            project.
          </p>
          <p class="card-text">
            <small class={`text-${props.mode === "light" ? "body-secondary" : "white"}`}>
              Developed by Sandeep Kumar
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
