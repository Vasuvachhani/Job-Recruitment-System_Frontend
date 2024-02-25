import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {FaUser , FaLock} from "react-icons/fa"



export default function Login_Form() {
  var [email, setEmail] = useState("");
  var [Page, setPage] = useState("");
  var [password, setPassword] = useState("");
  const history = useNavigate();

//   const iconstyle = {
//     fontSize: "24px",
//     marginTop: "8px",
//     color: "#007bff",
//   };
//   const emailfield = {
//     marginLeft: "19px",
//   };
//   const passwordfield = {
//     marginLeft: "19px",
//   };
//   const buttonstyle = {
//     width: "100px",
//     marginTop: "20px",
//     backgroundColor: "#007bff",
//     fontFamily: "Poppins",
//     fontWeight: "bold",
//     color: "#fff",
//   };
  
  function emailenter(event) {
    setEmail(event.target.value);
  }
  function passwordenter(event) {
    setPassword(event.target.value);
  }
  function submitbtn(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    if (email === "vasuvachhani2004@gmail.com" && password === "123456") {
      axios
        .post("http://localhost:3000/login", {
          email: email,
        })
        .then((obj) => {
          console.log(obj.status);
          console.log(obj.data);
          if (obj.status == "201") {
            alert("welcome");
            window.localStorage.setItem("token", obj.data.data);
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("type", "admin");
            setPage("true");
            history("/admindashboard");
          } else {
            alert("error");
          }
        });
    } else {
      alert("error");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
    <div className="bg1">
      <div className="login-div">
        <h1>Login</h1>
        <form onSubmit={submitbtn}>
          <div className="input-div">
            {/* <i className="fa fa-mobile-phone" ></i> */}
            <div className="input-bx">
              <input
                type="email"
                required="required"
                placeholder="Email"
                onChange={emailenter}
                value={email}
              />
              <FaUser className="icon"/>
            </div>
          </div>

          <div className="input-div1">
            {/* <i className="gg-password" ></i> */}
            <div className="input-bx" >
              <input
                type="password"
                required="required"
                onChange={passwordenter}
                placeholder="Password"
                value={password}
              />
              <FaLock className="icon"/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="centered-button"
              style={{ marginTop: "20px", fontFamily: "Poppins" }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
