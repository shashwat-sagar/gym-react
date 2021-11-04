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
          We hope to help you live a healthy lifestyle! We do this by helping you find the best equipment for your home gym, 
          studio or commercial gym, while keeping your budget, lifestyle and fitness goals in mind. We have all kinds of fitness equipment, 
          including strength equipment, aerobics, cross training and so on. Our excellent team is always helpful, 
          so please contact us to discuss your needs.
            <br />
            <br />
            Clients are at the focal point of what we do and why we do it! We have a group of prepared salespeople who are prepared 
            to help you with your exercise center gear needs. Our group will actually want to respond to your inquiries, 
            from legitimate item data to the most ideal way of incorporating hardware into your activity schedule. 
            We endeavor to guarantee we have solid associations with our providers, giving you the most ideal costs in the business. 
            Indeed, on the off chance that you track down a superior cost on one of our center item range,
             we'll match it as a feature of our image guarantees.
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
                  A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.
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
                  Boot camp workouts are similar to other circuit training workouts. They use many familiar body weight exercises such as pushups, burpees, and crunches.
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
                  <h5 class="card-title text-warning">Aerobic Capacity</h5>
                  <p class="card-text ">
                  Aerobic exercise is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process. "Aerobic" is defined as "relating to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.
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
                  Want to improve your health? Need to lose weight? This activity plan for beginners, combining running and strength and flexibility workouts, will get you into the habit of regular exercise in 12 weeks.
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
                  A personal trainer will work with clients, either in a small group setting or one-on-one, on their fitness goals, which includes improving a client's muscular endurance, strengthening a client's cardiovascular capabilities, and increasing a client's physical flexibility.
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
                  When it comes to fitness, working out in group settings can boost motivation, burn more calories and make exercise fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      </div>
  );
}

export default About;
