import React from "react";
import image from "../Images/1.png";
import "./styles/card-style.css";
// import "./About.css"

function About() {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src="https://www.sktperfectdemo.com/demos/sktgym/wp-content/themes/gym-pro/images/team-img1.jpg" id="trainerImg" alt={image} className="" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title text-warning">Mr. XYZ</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            nisi sed nesciunt fugiat accusantium minus. Placeat eos laborum
            repellendus voluptatem.
          </p>
          <a href="/" className="btn btn-outline-success">
            Go Anywhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
