import React from "react";
import "./styles/Exercises.css";
import { Link } from "react-router-dom";
// import logo1 from "../Images/png/1.png"
import logo2 from "../Images/png/2.png"
import logo3 from "../Images/png/3.png"
import logo4 from "../Images/png/4.png"
// import logo5 from "../Images/png/5.png"
// import logo6 from "../Images/png/6.png"
// import logo7 from "../Images/png/7.png"
// import logo8 from "../Images/png/8.png"
import logo9 from "../Images/png/9.png"
// import logo10 from "../Images/png/10.png"

function Exercise() {
  return (
    <div className="Exercises">
      <div class="cardCon">
        <div class="card" id="cardBody">
          <img
            src={logo4}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards"><Link className="linkk" to="/ex"><button className="cardButton">Workout 1</button></Link></h3>
            <p class="card-text">
            Chest And Triceps
            </p>
          </div>
        </div>

        <div class="card" id="cardBody">
          <img
            src={logo2}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards"><Link className="linkk" to="/exb"><button className="cardButton">Workout 2</button></Link></h3>
            <p class="card-text">
            Back And Biceps
            </p>
          </div>
        </div>
        <div class="card" id="cardBody">
          <img
            src={logo3}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards"><Link className="linkk" to="/exl"><button className="cardButton">Workout 3</button></Link></h3>
            <p class="card-text">
            Legs And Abs
            </p>
          </div>
        </div>
      </div>
      <div class="cardCon2">
        <div class="card" id="cardBody2">
          <img
            src={logo9}
            id="exLogo" alt="/"
          />

          <div class="card-body" >
          <h3 id="excercisesCards"><Link className="linkk" to="/exbs"><button className="cardButton">Workout 4</button></Link></h3>
            <p class="card-text">
            Back And Shoulders
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Exercise;
