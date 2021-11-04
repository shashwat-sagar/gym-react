import React from "react";
import "./styles/Exc.css";
import image1 from "../Images/workouts/ct/ct1.1.png";
import image2 from "../Images/workouts/ct/ct1.2.png";
import image3 from "../Images/workouts/ct/ct2.1.png";
import image4 from "../Images/workouts/ct/ct2.2.png";
import image5 from "../Images/workouts/ct/ct3.1.png";
import image6 from "../Images/workouts/ct/ct3.2.png";
import image7 from "../Images/workouts/ct/ct4.1.png";
import image8 from "../Images/workouts/ct/ct4.2.png";
import image9 from "../Images/workouts/ct/ct5.1.png";
import image10 from "../Images/workouts/ct/ct5.2.png";
function Exc() {
  return (
    <>
     
            <div class="card mb-3" id="cardss">
        <div class="row g-0" id="Card1">
          <div class="col-md-4">
            <img src={image1} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image2} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
             <div class="card-body" id="cardB">
              <h5 class="card-title">1. Bench press</h5>
              <p class="card-text">
              Sets 5 Reps 10 Tempo 2010 Rest 60sec Lie on a flat bench holding a barbell with your hands slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your chest. Press it back up to the start.
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
            <img src={image3} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image4} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
             <div class="card-body" id="cardB">
              <h5 class="card-title">2. Triceps dip</h5>
              <p class="card-text">
              Sets 5 Reps 6-10 Tempo 2110 Rest 60sec Grip rings or parallel bars with your arms straight. Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow. Press back up powerfully to return to the start.
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
              <h5 class="card-title">3. Incline dumbbell press</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each hand by your shoulders. Press the weights up until your arms are straight, then lower them back to the start under control.
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
              <h5 class="card-title">4. Incline dumbbell flye</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each hand above your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring them back to the top.
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
            <img src={image7} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-4">
            <img src={image8} class="img-fluid rounded-start" id="workouts" alt="" />
          </div>
          <div class="col-md-8">
             <div class="card-body" id="cardB">
              <h5 class="card-title">5 Triceps extension</h5>
              <p class="card-text">
              Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Stand tall holding a dumbbell over your head with both hands, arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start.
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

export default Exc;
