import React from "react";
import what from "../Images/12.jpg";

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
              <h5 class="card-title text-warning">Weighlifting</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Personal Trainer</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Yoga and Pilates</h5>
              <p class="card-text ">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Aerobics Class</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={what} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-warning">Massage Class</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
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
        </div>
      </div>
    </div>
  );
}

export default Services;
