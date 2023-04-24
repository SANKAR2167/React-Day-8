import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <h1 className="text-center">Mentor Login</h1>
        </div>
        <div className="card-body">
          <div className="row mt-5">
            <form className=" login-div" onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group col-sm-12 col-lg-8 mb-3">
                <label htmlFor="Input2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Input2"
                  placeholder="Enter Email Address.."
                  name="email"
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-lg-8 mb-3">
                <label htmlFor="Input1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Input1"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>
              <div className="login-btn col-6 mt-3">
                <button className="btn btn-primary col-8" onClick={handleClick}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;