
import React, { useState } from "react";
import InterviewList from "./interviewlist";
import Visit_list from "./Visit_list";


export default function ApproveList() {
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
    <div className="card center" style={{ width: "900px", marginLeft: "370px", marginTop: "40px" }}>
      <div className="card-header">
        <button
          className="centered-button"
          style={isInterview ? { backgroundColor: "white", color: "#007bff", border: "solid", width: "300px", marginLeft: "120px" } : { backgroundColor: "#007bff", width: "300px",marginLeft: "120px" }}
          onClick={handleNewClick}
        >
          Interview
        </button>
        <button
          className="centered-button"
          onClick={handleHistoryClick}
          style={!isInterview ? { backgroundColor: "white", color: "#007bff", border: "solid", width: "300px" } : { backgroundColor: "#007bff", width: "300px" }}
        >
          Visit Requests
        </button>
      </div>
      <div className="card-body">
        {isInterview ? <InterviewList /> : null}
        {!isInterview ? <Visit_list /> : null}
      </div>
    </div>
  );
}
