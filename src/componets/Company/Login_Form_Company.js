import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Login_Component from "./Login_componet";
import Registration from "./Registration";
import zIndex from "@mui/material/styles/zIndex";


export default function Login_Form_Company() {

  var [selection, setSelection] = useState("login");
  const history = useNavigate();

  function transfer() {
    setSelection("registration");
  }
  function transfer1() {
    setSelection("login");
  }
  const handleChildData = (data) => {
    setSelection(data);
  };

  return (
    <>
      {selection === "login" ? (
        <Login_Component select={setSelection} />
      ) : (
        <Registration sendData={handleChildData} />
      )}
     
        {selection === "login" ? (
          <p style={{margin:"-155px", color:"white"}}className="text-center mb-0">
            If you are new user? Register Here For{" "}
            <a className="fw-bold text-body" onClick={transfer}>
              <u
                style={{
                  fontFamily: "Poppins",
                  color: "#007bff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Company
              </u>
            </a>
          </p>
        ) : (
          <p style={{margin:"-25px", color:"white",overflow:"hidden",zIndex:"1"}} className="text-center   mb-0">
            if You are Already User? Login{" "}
            <a className="fw-bold text-body" onClick={transfer1}>
              <u
                style={{
                  fontFamily: "Poppins",
                  color: "#007bff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Company
              </u>
            </a>
          </p>
        )}
      
    </>
  );
}
