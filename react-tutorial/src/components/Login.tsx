import { useState } from "react";
import "../assets/Login.css";

function Login() {
  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  return (
    <>
      <div className="login-div">
      <div className="form-div">
        <div className="login-img"></div>
          <div className="login-form">
          <div className="form-title">Login</div>
            <div className="input-div">
              <div className="label">User Name</div>
              <input
                type="text"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => SetUserName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="input-div">
              <div className="label">Password</div>
              <input
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-links">
              <div className="form-link">reset password</div>
              <div className="form-link">create account</div>
            </div>
            <div className="button">
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
