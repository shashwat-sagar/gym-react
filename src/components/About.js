import React from "react";
import "./styles/About.css";
// import trainer1 from "../Images/10.jpg";

function About() {
  return (
    <div className="about">
      <div class="card border-warning" id="aboutFirst">
        <h1 class="card-header text-warning">About Us</h1>
        <div className="line"></div>
        <div class="card-body">
          <h5 class="card-title mb-2 text-muted">Special title treatment</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      <div class="card border-warning">
        <h1 class="card-header text-warning">What we do</h1>
        <div className="heading">
          <h5 class="card-subtitle mb-2 text-muted">We are passionate</h5>
        </div>
        <br />
        <hr className="line"/>
        <div className="card-body-what-we-do">
          <div class="row row-cols-1 row-cols-md-3 g-1">
            <div class="col">
              <div class="card">
                <img
                  src="https://thumbs.dreamstime.com/b/crossfit-training-ropes-crossfit-training-man-working-out-battle-ropes-gym-108617218.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">Cross Fit</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://freedomfitness.com/corpus-christi-saratoga/wp-content/uploads/sites/4/2018/10/boot-camp-fitness-class-workout-gym-corpus-christi-tx.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">Boot Camp</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://cathe.com/wp-content/uploads/2018/12/SPK_0783.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">Aerobi Capacity</h5>
                  <p class="card-text ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://sktperfectdemo.com/themepack/gbfitness/wp-content/uploads/2020/01/12-week-challenge.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">12 Week Challenge</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://sktperfectdemo.com/themepack/gbfitness/wp-content/uploads/2020/01/personal-training.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">Personal Training</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://sktperfectdemo.com/themepack/gbfitness/wp-content/uploads/2020/01/group-classes.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-warning">Group Classes</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="trainer border-warning"> */}
        {/* <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div> */}

        {/* <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div> */}
        {/* </div> */}

        {/* <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div> */}

        {/* <div class="card" style={{ width: "22rem" }}>
          <img class="card-img-top" src={trainer1} alt="Card image cap" />
          <h3 class="card-header text-warning">Our trainer</h3>
          <h5 class="card-header text-warning">Mrs. XYZ</h5>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              itaque. Molestias distinctio, sit libero amet quaerat qui dolores
              blanditiis reiciendis?
            </p>
          </div>
        </div> */}
      </div>
  );
}

export default About;
