import React, { useState } from "react";
import NewVacancies from "./Newvacancies";
import History from "./History";
export default function Vacancies() {
  var [stylish, setStyle] = useState(true);
  function historyclick() {
    setStyle(false);
  }
  function newclick() {
    setStyle(true);
  }
  return (
    <>
      <div
        class="card text-center"
        style={{ width: "733px", marginLeft: "490px", marginTop: "40px" }}
      >
        <div class="card-header">
          <button
            className="centered-button"
            style={
              stylish == true
                ? {
                    backgroundColor: "white",
                    color: "#007bff",
                    border: "solid",
                    width: "300px",
                  }
                : { backgroundColor: "#007bff", width: "300px" }
            }
            onClick={newclick}
          >
            new
          </button>
          <button
            className="centered-button"
            onClick={historyclick}
            style={
              stylish == false
                ? {
                    backgroundColor: "white",
                    color: "#007bff",
                    border: "solid",
                    width: "300px",
                  }
                : { backgroundColor: "#007bff", width: "300px" }
            }
          >
            history
          </button>
        </div>
        <div class="card-body">
          {stylish == true ? <NewVacancies /> : <History />}
        </div>
      </div>
    </>
  );
}
