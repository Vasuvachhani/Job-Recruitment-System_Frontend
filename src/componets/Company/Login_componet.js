import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaUser,FaLock} from "react-icons/fa"


export default function Login_Component() {
  var [email, setEmail] = useState("");
  var [Page, setPage] = useState("login");
  var [password, setPassword] = useState("");
  const history = useNavigate();

  
  function emailenter(event) {
    setEmail(event.target.value);
  }
  function passwordenter(event) {
    setPassword(event.target.value);
  }
 

  function btnclick(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    try {
      axios
        .post("http://localhost:3000/Company_login", {
          email: email,
          pass: password,
        })
        .then((obj) => {
          if (obj.status === 201) {
            alert("welcome");
            window.localStorage.setItem("token", obj.data.data);
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("type", "company");
            setPage("true");
            history("/companydashboard");
          } else {
            alert(obj.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
    <div className="bg2">
      <div className="login-div1">
        <h1>Sign In</h1>
        <form onSubmit={btnclick}>
          <div className="input-div1">
           
            <div className="input-bx1" >
              <input
                type="email"
                required="required"
                onChange={emailenter}
                value={email}
                placeholder="Email"
              /> 
            <FaUser className="icon"/>
            </div>
          </div>

          <div className="input-div1">
           
            <div className="input-bx1">
              <input
                type="password"
                required="required"
                onChange={passwordenter}
                minLength={6}
                placeholder="Password"
                value={password}
              />
                <FaLock className="icon"/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="centered-button1"
            //   style={{ marginTop: "20px", fontFamily: "Poppins" }}
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
