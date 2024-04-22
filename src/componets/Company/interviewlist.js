import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Jobber_details from "./Jobber_Details";
import NotFound from "./NotFound";
export default function InterviewList() {
  var [update, setUpdate] = useState(false);
  var [j_data, setJdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3000/vacancy_Request_details", {
        email: window.localStorage.getItem("email"),
        Approve: "true",
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
  return (
    <>
      {" "}
      {j_data.length == 0 ? (
        <NotFound data="Currently, no approved job requests found" />
      ) : null}
      {j_data
        ? j_data.map((obj, index) => (
            <div key={index}>
              <Jobber_details
                Approve={obj.Approve}
                sts="show"
                description={obj.Job_description}
                jemail={obj.Jobber_email}
                senddata={handler}
              ></Jobber_details>
            </div>
          ))
        : null}
    </>
  );
}
