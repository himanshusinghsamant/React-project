import React, { useState } from "react";
import Navbar from "./Navbar";
import BookingSec from "./booking";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  const data = location.state
  console.log(data);
  const [effect, setEffect] = useState(false);

  function handleClick() {
    setEffect(true);
  }

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Navbar />
      <div className="container pt-5" style={{ height: "400px"}}>
        <div className="card mb-3" style={{maxWidth:"540px;"}}>
          <div className="row g-0">
            <div className="col-md-4" style={{width:'250px'}}>
              <img  src={data.param2} class="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bold'}}>{data.param3}</h5>
                <p className="card-text">
                 {data.param1}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="classbutton ">
          <button
            onClick={handleClick}
            type="button"
            class="btn btn-primary mt-5"
          >
            Book show
          </button>
        </div>
      </div>
      {effect && <BookingSec />}
    </div>
  );
};

export default Info;
