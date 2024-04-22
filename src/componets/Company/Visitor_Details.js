import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/company.css"
export default function Visitor_details(props) {
  var [companydata, setUserData] = useState();
  var [visitordata, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobber_details?email=${props.email}`)
      .then((data) => {
        // console.log(data)
        setData(data.data);
      });
    axios
      .post("http://localhost:3000/company_details", {
        email: window.localStorage.getItem("email"),
      })
      .then((response) => {
        setUserData(response.data.Data);
        console.log(response.data.Data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  function ApproveRequest() {
    axios
      .post("http://localhost:3000/visit_request_update", {
        cemail: window.localStorage.getItem("email"),
        jemail: visitordata.Email,
        Approve: "false",
        date: props.date,
        time: props.time,
        cname: companydata.Company_name,
        caddress: companydata.Address,
      })
      .then((data) => {
        if (data.data.data == "updated") {
          // console.log(data)
          props.datahandler(true);
          alert("successfully updated");
        }
      });
  }
  return (
    <>
      <div
        style={{
          border: "1px solid #000000",
          borderRadius: "10px",
          marginTop: "10px",
          boxShadow: "5px 10px 18px #c9c5c5",
        }}
      >
        <div style={{ width: "900px" }}>
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-user" aria-hidden="true"></i>Visitor Name:{" "}
            {visitordata ? visitordata.Name : null}{" "}
          </label>
          <br />
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-phone" aria-hidden="true"></i>Mobile No:{" "}
            {visitordata ? visitordata.Mobile_no : null}{" "}
          </label>
          <br />
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-envelope" aria-hidden="true"></i>Email:{" "}
            {visitordata ? visitordata.Email : null}{" "}
          </label>
          <br />
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>Graduation:{" "}
            {visitordata
              ? visitordata.qualification + " " + visitordata.Field
              : null}{" "}
          </label>
          <br />
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-calendar" aria-hidden="true"></i>Visit Date:{" "}
            {props.date}{" "}
          </label>{" "}
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
            <i class="fa fa-clock-o" aria-hidden="true"></i>Visit Time:{" "}
            {props.time}{" "}
          </label>
          <br />
          {props.sta != "show" ? (
            <button
              className="centered-button2"
              style={{
                marginRight: "0px",
                marginLeft: "380px",
                marginBottom: "20px",
              }}
              onClick={ApproveRequest}
            >
              Approve
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
