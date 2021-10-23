import React from "react";
import video from "../videos/1.mp4";
import './styles/Home.css'
import image1 from "../Images/gympics/1.jpeg"
import image2 from "../Images/gympics/2.jpeg"
import image3 from "../Images/gympics/3.jpeg"
import image4 from "../Images/gympics/4.jpeg"
import image5 from "../Images/gympics/5.jpeg"
import image6 from "../Images/gympics/6.jpeg"
import image7 from "../Images/gympics/7.jpeg"
import image8 from "../Images/gympics/8.jpeg"
import image9 from "../Images/gympics/9.jpeg"
// import image10 from "../Images/gympics/10.jpeg"
// import image11 from "../Images/gympics/11.jpeg"

function Home() {
  return (
    <div className="Home">
      <div class="middle">
        <div id="video-con">
          {/* <div class="con h-100" id="vidText">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-3" id="vidHeading">
                  Video Header
                </h1>
                <p class="lead mb-0" id="vidPara">
                  Using HTML5 Video and Bootstrap
                </p>
              </div>
            </div>
          </div> */}

          {/* <video id="video" autoplay="autoplay" muted="muted" loop="loop">
            <source src={video} type="video/mp4" />
          </video> */}
          <video autoPlay loop muted
          style={{
            position: "relative",
            width: "100%",
            left: "50%",
            // top: "50%",
            height: "100%",
            objectFit: "cover",
            padding: "",
            margin: "28% 0 -29% 0",
            transform: "translate(-50%, -50%)"
          }}
          >
            <source src={video} type="video/mp4"/>
          </video>
        </div>
        <div id="comment">
          <p class="paraunderVid">
           Exercise not only changes your body, it changes your mind, your attitude, and your mood.
          </p>
        </div>
      </div>

      <div
        id="carouselMultiItemExample"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div class="d-flex justify-content-center mb-4">
          <button
            class="carousel-control-prev position-relative"
            id="button"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative"
            id="button"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="carousel-inner py-4" id="caro">
          <div class="carousel-item active">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4">
                  <div class="card">
                    <img
                      src={image1}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image2}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image3}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <img
                      src={image4}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image5}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image6}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div class="card">
                    <img
                      src={image7}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image8}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={image9}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        <font color="#ffc400" size="5px">
                          C
                        </font>
                        ard
                      </h5>
                      <p class="card-text">
                        <font color="#ffc400">Some</font> quick example text to
                        build on the card title and make up the bulk of the
                        card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
