import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
       <div>
       <h1 className="main-heading text-center">CRUD APP
       </h1>
       <h3 className="text-center p-3">Student-Mentor Details</h3>
       </div>
       
        <div className="container">
          <div className="row mb-5">
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title"> Students Detail</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name</li>
                  <li className="list-group-item">Email</li>
                  <li className="list-group-item">Age</li>
                  <li className="list-group-item">Contact</li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary" onClick={()=>navigate("/home")}>
                  View Students Details
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title"> Mentors Detail</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name</li>
                  <li className="list-group-item">Email</li>
                  <li className="list-group-item">Age</li>
                  <li className="list-group-item">Contact</li>
                  <li className="list-group-item">Subject</li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary"  onClick={()=>navigate("/home1")}>View Mentor Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;