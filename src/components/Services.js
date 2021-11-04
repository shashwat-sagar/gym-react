import React from "react";
import what3 from "../Images/arobics.jpg";
import what4 from "../Images/message.jpg";
import what from "../Images/12.jpg";
import what1 from "../Images/11.jpg";
import what2 from "../Images/yoga.jpg";

function Services() {
  return (
    <div class="card border-warning">
      <h1 class="card-header text-warning">Our best</h1>
      <div className="heading">
        <h5 class="card-subtitle mb-2 text-muted">Services</h5>
      </div>
      <br />
      <hr className="line" />
      <div class="row row-cols-1 row-cols-md-3 g-1">
        <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Weightlifting</h5>
              <p class="card-text">
              Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you’ll burn more calories even when you’re resting.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Personal Trainer</h5>
              <p class="card-text">
              A personal trainer will work with clients, either in a small group setting or one-on-one, on their fitness goals, which includes improving a client's muscular endurance, strengthening a client's cardiovascular capabilities, and increasing a client's physical flexibility.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Yoga and Pilates</h5>
              <p class="card-text ">
              Yoga and Pilates are both low-impact workouts that focus on using bodyweight resistance. The benefits are vast. Both workouts can increase overall health, leading to a better quality of life.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Aerobics Class</h5>
              <p class="card-text">
              Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Massage Class</h5>
              <p class="card-text">
               The simulation of the body's soft tissues is known as massage. Hands, fingertips, elbows, knees, forarms.
               Massage is most often used to relieve tension or pain in the body.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Sauna Bath</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
