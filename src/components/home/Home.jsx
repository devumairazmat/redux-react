import React from "react";
import phone from "../../assets/images/mobile.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <span style={{ fontSize: "3em", color: "black", float: "right" }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="card shadow-lg" style={{ width: "18rem" }}>
            <img
              className="card-img-top p-4"
              src={phone}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Mobile Phone</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <button type="button" className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
