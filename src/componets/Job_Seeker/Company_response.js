
import React, { useState } from "react";
import InterviewResponse from "./InterViewRespose";
import VisitResponse from "./VisitResponse";

export default function CompanyResponse() {
  const [isInterview, setIsInterview] = useState(true);

  function handleHistoryClick() {
    console.log("hello")
    setIsInterview(false);
  };

  const handleNewClick = () => {
    console.log("jja")
    setIsInterview(true);
  };

  return (
    <div className="card center" style={{ width: "733px", marginLeft: "360px", marginTop: "50px" }}>
      <div className="card-header">
        <button
          className="centered-button"
          style={isInterview ? { backgroundColor: "white", color: "#007bff", border: "solid", width: "300px", marginLeft: "50px" ,marginTop:"40px"} : { backgroundColor: "#007bff", width: "300px",marginLeft: "40px",marginTop:"40px" }}
          onClick={handleNewClick}
        >
          Interview
        </button>
        <button
          className="centered-button"
          onClick={handleHistoryClick}
          style={!isInterview ? { backgroundColor: "white", color: "#007bff", border: "solid", width: "300px",marginTop:"20px" } : { backgroundColor: "#007bff", width: "300px",marginTop:"20px" }}
        >
          Visit Requests
        </button>
      </div>
      <div className="card-body">
        {isInterview ? <InterviewResponse /> : null}
        {!isInterview ? <VisitResponse /> : null}
      </div>
    </div>
  );
}
