import React from "react";
import "./styles/Exc.css";
import image1 from "../Images/workouts/bs/bs1.1.png";
import image2 from "../Images/workouts/bs/bs1.2.png";
import image3 from "../Images/workouts/bs/bs2.1.png";
import image4 from "../Images/workouts/bs/bs2.2.png";
import image5 from "../Images/workouts/bs/bs3.1.png";
import image6 from "../Images/workouts/bs/bs3.2.png";
import image7 from "../Images/workouts/bs/bs4.1.png";
import image8 from "../Images/workouts/bs/bs4.2.png";
import image9 from "../Images/workouts/bs/bs5.1.png";
import image10 from "../Images/workouts/bs/bs5.2.png";
function Exbs() {
  return (
    <>
      <div class="card mb-3" id="cardss">
        <div class="row g-0" id="Card1">
          
          <div class="col-md-4" >
            <img src={image1} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image2} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body" id="cardB">
              <h5 class="card-title">1. Overhead press</h5>
              <p class="card-text">
              Sets 5 Reps 10 Tempo 2010 Rest 60sec

Hold a bar in front of your neck with your hands just wider than shoulder-width apart. Keeping your chest up and core braced, press the bar overhead until your arms are straight. Lower it back to the start.
              </p>
              
            </div>
          </div>
        </div>
        </div>
      
      <div class="card mb-3" id="cardss">
        <div class="row g-0" id="Card1">
          <div class="col-md-4">
            <img src={image3} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image4} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body" id="cardB">
              <h5 class="card-title">2. Rack pull</h5>
              <p class="card-text">
              Sets 5 Reps 10 Tempo 2111 Rest 60sec

Stand tall in front of a barbell resting on safety bars at knee height. Bend and grasp the bar with an overhand grip, then stand up until your back is straight again, squeezing your shoulder blades together at the top.
              </p>
              <p class="card-text">
               
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" id="cardss">
        <div class="row g-0" id="Card1">
          <div class="col-md-4">
            <img src={image6} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image5} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body" id="cardB">
              <h5 class="card-title">3. Seated dumbbell press</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2010 Rest 60sec

Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up, press the weights directly overhead until your arms are straight, then lower them back to the start.
              </p>
              <p class="card-text">
               
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" id="cardss">
        <div class="row g-0" id="Card1">
          <div class="col-md-4">
            <img src={image9} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image10} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body" id="cardB">
              <h5 class="card-title">4. Lateral raise</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2011 Rest 60sec

Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in your elbows, raise the weights out to shoulder height, then lower back to the start.
              </p>
              <p class="card-text">
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" id="cardss">
        <div class="row g-0"  id="Card1">
          <div class="col-md-4">
            <img src={image7} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image8} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body" id="cardB">
              <h5 class="card-title">5 Reverse flye</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2011 Rest 60sec

Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend in your elbows, raise the weights out to shoulder height, then lower back to the starbs
              </p>
              <p class="card-text">
                
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Exbs;
