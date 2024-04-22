import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/admin.css";

export default function Company_view(props) {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  var [data, setData] = useState();
  var [images, setImages] = useState([]);
  var [date, setDate] = useState();
  var [time, setTime] = useState();
  var [status, setStatus] = useState(false);
  const iconstyle = {
    fontSize: "24px",
    marginTop: "8px",
  };
  const emailfield = {
    marginLeft: "19px",
  };
  function dateEnter(e) {
    setDate(e.target.value);
  }
  function timeEnter(e) {
    setTime(e.target.value);
  }
  useEffect(() => {
    axios
      .post("http://localhost:3000/company_dashboard_data", {
        email: props.email,
      })
      .then((obj) => {
        console.log(obj);
        if (obj.data.data === true) {
          setData(obj.data.details);
          // console.log(obj.data.details.logo);
          //   setLogo(obj.data.details.logo);
          setImages(obj.data.details.company_images);
          //   setDescription(obj.data.details.description)
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:3000/visit_request_data", {
        c_email: props.email,
        j_email: window.localStorage.getItem("email"),
        Approve: "false",
      })
      .then((data) => {
        console.log(data.data.data);
        if (data.data.data == "success") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function Approve() {
    setLoading(true);
    console.log(props.email);
    axios
      .put("http://localhost:3000/approve", {
        Email: props.email,
      })
      .then((data) => {
        alert("Company Approve SuccessFully");
        window.location.reload();
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }
  function Reject() {
    setLoading1(true);
    axios
      .delete("http://localhost:3000/remove", {
        data: {
          Email: props.email,
        },
      })
      .then((data) => {
        alert("Company Remove SuccessFully");
        window.location.reload();
        setLoading1(false);
      })
      .catch((error) => {
        alert(error);
        setLoading1(false);
      });
  }
  function ApplyforVisitRequest(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/visit_request", {
        cemail: props.email,
        jemail: window.localStorage.getItem("email"),
        Approve: "false",
        Date: date,
        Time: time,
      })
      .then((data) => {
        console.log(data);
        if (data.data.data == "success") {
          setStatus(true);
          alert(
            "Visit Request Successfully Send.please Wait for Company Response"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const mid = Math.ceil(images.length / 2);
  const leftColumn = images.slice(0, mid);
  const rightColumn = images.slice(mid);
  return (
    <>
      <div
        className="cardd1"
        
      >
        {props.show !== "true" ? (
          <img src={props.img} className="card1-img-top" alt="..." />
        ) : null}
        <div className="card-body1">
          <h5 className="card-title1">
            <i className="fa fa-building-o" aria-hidden="true"></i><span className="bold">Company Name :-</span> 
             {props.name}
          </h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="fa fa-address-card" aria-hidden="true"></i><span className="bold">Company Name :-</span> Address:-
              {props.address}
            </li>
            <li className="list-group-item">
              <i
                className="fa fa-mobile"
                aria-hidden="true"
                style={{ fontSize: "20px", width: "20px" }}
              ></i>
             <span className="bold"> Mobile No :-</span> {props.mobile}
            </li>
            <li className="list-group-item">
              <i className="fa fa-envelope" aria-hidden="true"></i><span className="bold">Email :-</span> 
              {props.email}
            </li>
            {props.status === "unverified" ? (
              <li
                className="text-center"
                style={{ alignItems: "center", margin: "20px", border: "none",listStyle:"none" }}
              >
                <div className="button-container">
                  <button
                    className="button button-green"
                    style={{ background: "green",marginBottom:"20px" }}
                    onClick={Approve}
                  >
                    {loading ? "Loading..." : "Approve"}
                  </button>
                  <button
                    className="button button-red"
                    style={{ background: "red" }}
                    onClick={Reject}
                  >
                    {loading1 ? "Loading..." : "Reject"}
                  </button>
                </div>
              </li>
            ) : (
              console.log()
            )}
          </ul>

          {props.show === "true" ? (
            <div className="mb-5">
              <p className="lead fw-bold mb-1 mt-2">About Company</p>
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                {data ? (
                  <>
                    <p className="font-italic mb-1">
                      <i className="fa fa-asterisk" aria-hidden="true"></i>
                      {data.description}
                    </p>
                    <p className="font-italic mb-1">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>Opening
                      Time:-{data.opening_time}
                      <i
                        className="fa fa-clock-o"
                        aria-hidden="true"
                        style={{ marginLeft: "40px" }}
                      ></i>
                      Closing Time:-{data.closing_time}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ marginTop: "10px" }}
                      >
                        Photos
                      </p>
                    </div>
                    <div className="row g-2">
                      <div className="col mb-2">
                        {leftColumn.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className="w-100 rounded-3"
                            style={{ height: "200px", margin: "5px" }}
                          />
                        ))}
                      </div>
                      <div className="col mb-2">
                        {rightColumn.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className="w-100 rounded-3"
                            style={{ height: "200px", margin: "5px" }}
                          />
                        ))}
                      </div>
                    </div>

                    <form onSubmit={ApplyforVisitRequest}>
                      {status === true ? null : (
                        <>
                          {" "}
                          <li
                            className="list-group-item"
                            style={{ margin: "10px" }}
                          >
                            <div
                              className="input-div2"
                              style={{ marginLeft: "10px" }}
                            >
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                                style={iconstyle}
                              ></i>
                              <h5 style={{ marginTop: "10px" }}>Visit Date</h5>
                              <div className="inputt-bx" style={emailfield}>
                                <input
                                  type="date"
                                  required="required"
                                  onChange={dateEnter}
                                  value={date}
                                />
                              </div>
                            </div>
                          </li>
                          <li
                            className="list-group-item"
                            style={{ margin: "10px" }}
                          >
                            <div
                              className="input-div2"
                              style={{ marginLeft: "10px" }}
                            >
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                                style={iconstyle}
                              ></i>
                              <h5 style={{ marginTop: "10px" }}>Visit time</h5>
                              <div className="inputt-bx" style={emailfield}>
                                <input
                                  type="time"
                                  required="required"
                                  onChange={timeEnter}
                                  value={time}
                                />
                              </div>
                            </div>
                          </li>
                        </>
                      )}

                      {props.show === "true" ? (
                        status === true ? (
                          <button
                            className="centeredd-button"
                            type="submit"
                            style={{ marginLeft: "260px", marginTop: "10px" }}
                            disabled
                          >
                            Applied
                          </button>
                        ) : (
                          <button
                            className="centeredd-button"
                            type="submit"
                            style={{ marginLeft: "260px", marginTop: "10px" }}
                          >
                            Apply
                          </button>
                        )
                      ) : null}
                    </form>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
