import React from "react";
import img12 from '../Images/12.jpg'
import img11 from '../Images/11.jpg'
import img9 from '../Images/9.jpg'
import "./styles/Gallery.css"

function Gallery() {
  return (
    <div className="Gallery">
      {/* <!-- Upper Slide ends --> */}
      <h2 class="imgHeader">Exercises</h2>
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselMultiItemExample1"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        {/* <!-- Inner --> */}
        <div class="carousel-inner py-4" id="caro">
          {/* <!-- Single item --> */}
          <div class="carousel-item active">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Inner -->
    <!-- Controls --> */}
        <div class="d-flex justify-content-center mb-4" id="contRol">
          <button
            class="carousel-control-prev position-relative"
            id="button1"
            type="button"
            data-mdb-target="#carouselMultiItemExample1"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative"
            id="button2"
            type="button"
            data-mdb-target="#carouselMultiItemExample1"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Upper Slide ends -->



  <!-- Middle Carousel Starts --> */}

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" id="caroItemBig">
            <img
              src={img12}
              class="d-block w-100"
              id="bigItem"
              alt="..."
            />
          </div>
          <div class="carousel-item" id="caroItemBig">
            <img
              src={img11}
              class="d-block w-100"
              id="bigItem"
              alt="..."
            />
          </div>
          <div class="carousel-item" id="caroItemBig">
            <img
              src={img9}
              class="d-block w-100"
              id="bigItem"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Middle Carousel Ends --> */}

      <h2 class="imgHeader">Our Gym</h2>
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselMultiItemExample2"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        {/* <!-- Inner --> */}
        <div class="carousel-inner py-4" id="caro">
          {/* <!-- Single item --> */}
          <div class="carousel-item active">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>id="multiImagesSlider"
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <div class="container">
              <div class="row" id="row1">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                      class="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                    {/* <!-- <div class="card-body">
                              <h5 class="card-title">
                                  <font color="#ffc400" size="5px">C</font>ard
                              </h5>
                              <p class="card-text">
                                  <font color="#ffc400">Some</font> quick example text to build on the card title
                                  and
                                  make up the bulk of the card's content.
                              </p>
                          </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Inner -->
    <!-- Controls --> */}
        <div class="d-flex justify-content-center mb-4" id="contRol">
          <button
            class="carousel-control-prev position-relative"
            id="button1"
            type="button"
            data-mdb-target="#carouselMultiItemExample2"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative"
            id="button2"
            type="button"
            data-mdb-target="#carouselMultiItemExample2"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
