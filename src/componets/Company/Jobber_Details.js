import React from "react";
import image from "../images/request.webp";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ResumeTemplete from "../Job_Seeker/Resume_Templete";
export default function Jobber_details(props) {
  console.log(props.sts);
  var [data, setData] = useState();
  var [visible, setVisible] = useState(false);
  var [image, setImage] = useState(false);
  var email = props.jemail;
  var [user, setUserData] = useState();
  var [jresume, setJresume] = useState(false);
  var [date, setDate] = useState();
  var [time, setTime] = useState();
  var [address, setAddress] = useState();
  const iconstyle = {
    fontSize: "24px",

    marginTop: "8px",
  };
  const emailfield = {
    marginLeft: "19px",
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobber_details?email=${email}`)
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
  function resumeView() {
    if (visible == true) {
      setImage(false);
      setVisible(false);
      setJresume(false);
    } else {
      if (data.resume != "true" && data.resume != "null") {
        setImage(true);
        setVisible(true);
      }
      if (data.resume == "true" && data.status == "true") {
        setJresume(true);
        setVisible(true);
      }
    }
  }
  function dateEnter(e) {
    setDate(e.target.value);
  }
  function timeEnter(e) {
    setTime(e.target.value);
  }
  function addressEnter(e) {
    setAddress(e.target.value);
  }
  function approvebtn(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/Vacancy_Request_Update", {
        Company_email: window.localStorage.getItem("email"),
        Jobber_email: data.Email,
        description: props.description,
        date: date,
        time: time,
        Address: address,
        Approve: "true",
        cname: user.Company_name,
      })
      .then((data) => {
        console.log(data);
        if (data.data.data == "success") {
          alert("successfully approve");
          props.senddata(true);
        }
      })
      .catch((Error) => {
        console.log(Error);
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
            <i class="fa fa-asterisk" aria-hidden="true"></i>Job Description:-
            {props.description}{" "}
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
            <i class="fa fa-user" aria-hidden="true"></i>
            {data ? data.Name : null}
          </label>
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            <i class="fa fa-envelope" aria-hidden="true"></i>
            {data ? data.Email : null}
          </label>
          <label
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            <i class="fa fa-mobile" aria-hidden="true"></i>
            {data ? data.Mobile_no : null}
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
            <i class="fa fa-file" aria-hidden="true"></i>Resume
          </label>
          <button
            className="centered-button2"
            style={{ margin: "20px" }}
            onClick={resumeView}
          >
            {visible ? "Close" : "View"}
          </button>
          <br></br>
          {image == true ? (
            <img
              src={data.resume}
              style={{ width: "800px", marginLeft: "50px" }}
            />
          ) : null}
          {jresume == true ? (
            <ResumeTemplete user={data} type="company" mleft="46px" />
          ) : null}

          {props.sts != "show" ? (
            <form onSubmit={approvebtn}>
              <li className="list-group-item" style={{ margin: "10px" }}>
                <div className="input-div2" style={{ marginLeft: "10px" }}>
                  <i
                    className="fa fa-calendar"
                    aria-hidden="true"
                    style={iconstyle}
                  ></i>
                  <h5 style={{ marginTop: "10px" }}>Interview Date</h5>
                  <div className="input-bx" style={emailfield}>
                    <input
                      type="date"
                      required="required"
                      onChange={dateEnter}
                      value={date}
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{ margin: "10px" }}>
                <div className="input-div2" style={{ marginLeft: "10px" }}>
                  <i
                    className="fa fa-clock-o"
                    aria-hidden="true"
                    style={iconstyle}
                  ></i>
                  <h5 style={{ marginTop: "10px" }}>Interview time</h5>
                  <div className="input-bx" style={emailfield}>
                    <input
                      type="time"
                      required="required"
                      onChange={timeEnter}
                      value={time}
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{ margin: "10px" }}>
                <div className="input-div2" style={{ marginLeft: "10px" }}>
                  <i
                    className="fa fa-building"
                    aria-hidden="true"
                    style={iconstyle}
                  ></i>
                  <h5 style={{ marginTop: "10px" }}>Interview Address</h5>
                  <div className="input-bx" style={emailfield}>
                    <textarea
                      type="text"
                      required="required"
                      onChange={addressEnter}
                      value={address}
                    />
                  </div>
                </div>
              </li>
              <button
                type="submit"
                className="centered-button"
                style={{
                  marginLeft: "270px",
                  marginBottom: "20px",
                  backgroundColor: "green",
                }}
              >
                Approve
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
}
