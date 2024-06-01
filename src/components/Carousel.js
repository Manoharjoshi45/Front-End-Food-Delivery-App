import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption "style={{ zIndex:"10" }} >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"

            />
            
          </form>
        </div>

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1541781550486-81b7a2328578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i1.wp.com/www.theweddingvowsg.com/wp-content/uploads/2021/04/bbq-grills-Singapore.jpg?fit=1000%2C668&ssl=1"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
