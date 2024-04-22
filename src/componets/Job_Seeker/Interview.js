import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/job.css";

export default function Interview(props) {
  const [company, setCompanyData] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3000/company_details", {
        email: props.cemail,
      })
      .then((response) => {
        setCompanyData(response.data.Data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="interview-container">
      <div className="interview-content">
        {props.status !== "true" ? (
          <div>
            <label className="label-style">
              <i className="fa fa-asterisk" aria-hidden="true"></i> <span className="bold">Job Description:</span>
            </label>
            <label className="description-style">{props.description}</label>
          </div>
        ) : null}
        <label className="label-style">
          <i className="fa fa-building" aria-hidden="true"></i><span className="bold">Company Name:</span> {company ? company.Company_name : null}
        </label>
        <label className="label-style">
          <i className="fa fa-envelope" aria-hidden="true"></i><span className="bold">Company Email:</span> {props.cemail}
        </label>
        <label className="label-style">
          <i className="fa fa-phone" aria-hidden="true"></i><span className="bold">Company Mobile:</span> {company ? company.Mobile_no : null}
        </label>
        {props.status !== "true" ? (
          <div className="about-container">
            <p>
              <i className="fa fa-asterisk" aria-hidden="true"></i><span className="bold">About Interview:</span> 
            </p>
            <p><span className="bold">Address:</span> {props.address}</p>
            <p><span className="bold">Date:</span> {props.Date}</p>
            <p><span className="bold">Time:</span> {props.time}</p>
          </div>
        ) : (
          <div className="about-container">
            <p>
              <i className="fa fa-asterisk" aria-hidden="true"></i><span className="bold">About Visit:</span> 
            </p>
            <p><span className="bold">Date:</span> {props.Date}</p>
            <p><span className="bold">Time:</span> {props.time}</p>
          </div>
        )}
      </div>
    </div>
  );
}
