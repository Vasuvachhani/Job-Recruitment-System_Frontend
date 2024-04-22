import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Jobber_details from "./Jobber_Details";
import NotFound from "./NotFound";
export default function Jobber_Request() {
  var [update, setUpdate] = useState(false);
  var [j_data, setJdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3000/vacancy_Request_details", {
        email: window.localStorage.getItem("email"),
        Approve: "false",
      })
      .then((data) => {
        console.log(data.data);
        setJdata(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handler(data) {
    console.log(data);
    setUpdate(data);
  }
  useEffect(() => {
    if (update == true) {
      axios
        .post("http://localhost:3000/vacancy_Request_details", {
          email: window.localStorage.getItem("email"),
          Approve: "false",
        })
        .then((data) => {
          console.log(data.data);
          setJdata(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [update]);
  return (
    <>
      <div style={{ width: "900px", marginLeft: "370px", marginTop: "20px" }}>
        <label className="parent_label" style={{ marginLeft: "0px" }}>
          Job Requests
        </label>
        {j_data.length == 0 ? (
          <NotFound data="no job Request Found at the moment" />
        ) : null}
        {j_data
          ? j_data.map((obj, index) => (
              <div key={index}>
                <Jobber_details
                  Approve={obj.Approve}
                  description={obj.Job_description}
                  jemail={obj.Jobber_email}
                  senddata={handler}
                ></Jobber_details>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
