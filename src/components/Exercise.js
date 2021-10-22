import React from "react";
import "./styles/Exercises.css";
// import logo1 from "../Images/png/1.png"
import logo2 from "../Images/png/2.png"
import logo3 from "../Images/png/3.png"
import logo4 from "../Images/png/4.png"
import logo5 from "../Images/png/5.png"
import logo6 from "../Images/png/6.png"
import logo7 from "../Images/png/7.png"
import logo8 from "../Images/png/8.png"
import logo9 from "../Images/png/9.png"
import logo10 from "../Images/png/10.png"

function Exercise() {
  return (
    <div className="Exercises">
      <div class="cardCon">
        <div class="card" id="cardBody">
          <img
            src={logo10}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">C<font color="#fff">hes</font>t</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>

        <div class="card" id="cardBody">
          <img
            src={logo2}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ac</font>k</h3>
            <p class="card-text">
            
              Quick
            </p>
          </div>
        </div>
        <div class="card" id="cardBody">
          <img
            src={logo3}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">C<font color="#fff">hes</font>t</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>
      </div>

      <div class="cardCon">
        <div class="card" id="cardBody">
          <img
            src={logo4}
            id="exLogo" alt="/"
          />

          <div class="card-body">
            <h3 id="excercisesCards">T<font color="#fff">ricep</font>s</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>

        <div class="card" id="cardBody">
          <img
            src={logo5}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ac</font>k</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>
        <div class="card" id="cardBody">
          <img
            src={logo6}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ac</font>k</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>
      </div>
      <div class="cardCon">
        <div class="card" id="cardBody">
          <img
            src={logo7}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ac</font>k</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>

        <div class="card" id="cardBody">
          <img
            src={logo8}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ack</font></h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>
        <div class="card" id="cardBody">
          <img
            src={logo9}
            id="exLogo" alt="/"
          />

          <div class="card-body">
          <h3 id="excercisesCards">B<font color="#fff">ac</font>k</h3>
            <p class="card-text">
              Quick
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;
