// import React, { Component } from "react";
import Card from "./CardUi";
// import Card1 from "./Card1";
// import Card2 from "./Card2";
// import Card3 from "./Card3";
import "./styles/CardUi.css";

function Cards() {
  return (
    <div className="trainer">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <h1 className="h1-train">Our Trainers</h1>
          <div className="line"></div>
          <div className="col-md-4" id="TrainerCard">
            <Card />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
