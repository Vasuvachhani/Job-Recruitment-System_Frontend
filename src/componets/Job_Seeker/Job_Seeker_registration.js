import React, { useState } from "react";
import axios from "axios";
import "./Styles/Registration.css";

export default function Job_Seeker_Registration({ sendData }) {
  var [name, setName] = useState("abc");
  var [email, setEmail] = useState("");
  var [address, setAddress] = useState("112");
  var [mobile, setMobile] = useState("9723362082");
  var [password, setPassword] = useState("123456");
  var [loading, setLoading] = useState(false);
  var [confirmpassword, setConfirmPassword] = useState("123456");
  var [resume, setResume] = useState(null);
  var [experience, setExperience] = useState("1");
  const [selectedOption, setSelectedOption] = useState("not selected");
  var [url, setUrl] = useState(false);
  var [image, setImage] = useState();
  const [selectedField, setSelectedField] = useState("not selected");
  const form = new FormData();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };
  function mobileEnter(event) {
    setMobile(event.target.value);
  }
  function addressEnter(event) {
    setAddress(event.target.value);
  }

  function ResumeEnter(event) {
    console.log(event.target.files[0]);
    setResume(event.target.files[0]);
    setUrl(true);
  }
  function ImageEnter(event) {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  }

  const iconstyle = {
    fontSize: "24px",
    color: "#007bff",
  };
  const iconstyle1 = {
    fontSize: "30px",
    color: "#007bff",
  };
  function nameEnter(event) {
    setName(event.target.value);
  }
  function passwordenter(event) {
    setPassword(event.target.value);
  }
  function confirmpasswordEnter(event) {
    setConfirmPassword(event.target.value);
  }
  function emailenter(event) {
    setEmail(event.target.value);
  }
  function ExperienceEnter(event) {
    setExperience(event.target.value);
  }

  function btnclick(event) {
    setLoading(true);
    event.preventDefault();
    if (selectedField == "not selected") {
      setLoading(false);
      alert("Please Select Graduation");
    } else if (selectedOption == "not selected") {
      setLoading(false);
      alert("Please Select Field");
    } else if (password != confirmpassword) {
      setLoading(false);
      alert("Password and Confirm password is not same");
      setPassword("");
      setConfirmPassword("");
    }
    // Check if an image is selected
    else {
      if (!image) {
        setLoading(false);
        alert("Please select an image");
        return;
      }

      // Upload the image to Cloudinary
      const imageForm = new FormData();
      imageForm.append("file", image);
      imageForm.append("upload_preset", "bhavik-app");
      imageForm.append("cloud_name", "dg1xa2wxc");

      fetch("https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload", {
        method: "post",
        body: imageForm,
      })
        .then((imageResponse) => {
          if (!imageResponse.ok) {
            setLoading(false);
            throw new Error(
              `Image upload HTTP error! Status: ${imageResponse.status}`
            );
          }
          return imageResponse.json();
        })
        .then((imageData) => {
          const imageUrl = imageData.url;

          if (!resume) {
            saveUserData({ image: imageUrl });
            return;
          }

          // Upload the resume to Cloudinary
          const resumeForm = new FormData();
          resumeForm.append("file", resume);
          resumeForm.append("upload_preset", "bhavik-app");
          resumeForm.append("cloud_name", "dg1xa2wxc");

          return fetch(
            "https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload",
            {
              method: "post",
              body: resumeForm,
            }
          )
            .then((resumeResponse) => {
              if (!resumeResponse.ok) {
                setLoading(false);
                throw new Error(
                  `Resume upload HTTP error! Status: ${resumeResponse.status}`
                );
              }
              return resumeResponse.json();
            })
            .then((resumeData) => {
              const resumeUrl = resumeData.url;

              saveUserData({ image: imageUrl, resume: resumeUrl });
            });
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }

  function saveUserData(data) {
    axios
      .post("http://localhost:3000/job_seeker_data", {
        name: name,
        experience: experience,
        email: email,
        field: selectedOption,
        qualification: selectedField,
        image: data.image,
        resume: data.resume || "null",
        mobile: mobile,
        password: password,
        status: url,
      })
      .then((obj) => {
        if (obj.data.error) {
          setLoading(false);
          alert(obj.data.error);
        } else {
          setLoading(false);
          alert(
            "Congratulations! You are registered in the system successfully"
          );
          sendData("login");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  // ...

  return (
    <>
      <div className="bg5">
        <div className="login-div5">
          <h1>Sign Up</h1>
          <form onSubmit={btnclick}>
            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="text"
                  required="required"
                  onChange={nameEnter}
                  placeholder="Name"
                  value={name}
                />
                <i
                  className="fa fa-user"
                  aria-hidden="true"
                  style={iconstyle}
                ></i>
              </div>
            </div>
            <div className="input-div5">
              <div className="input-bx5">
                <textarea
                  type="text"
                  required="required"
                  onChange={addressEnter}
                  placeholder="Address"
                  value={address}
                />
                <i
                  className="fa fa-address-card"
                  aria-hidden="true"
                  style={iconstyle}
                ></i>
              </div>
            </div>
            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="tel"
                  required="required"
                  onChange={mobileEnter}
                  value={mobile}
                  pattern="[789][0-9]{9}"
                  placeholder="Mobile No."
                />
                <i
                  className="fa fa-mobile"
                  aria-hidden="true"
                  style={iconstyle1}
                ></i>
              </div>
            </div>

            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="email"
                  required="required"
                  onChange={emailenter}
                  value={email}
                  placeholder="Email"
                />
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={iconstyle}
                ></i>
              </div>
            </div>

            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="number"
                  required="required"
                  onChange={ExperienceEnter}
                  value={experience}
                  placeholder="Experience"
                  min={0}
                />
                <i
                  className="fa fa-history"
                  aria-hidden="true"
                  style={iconstyle}
                ></i>
              </div>
            </div>
            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="password"
                  required="required"
                  onChange={passwordenter}
                  value={password}
                  minLength={6}
                  placeholder="Password"
                />
                <i className="gg-password" style={iconstyle}></i>
              </div>
            </div>
            <div className="input-div5">
              <div className="input-bx5">
                <input
                  type="password"
                  minLength={6}
                  required="required"
                  onChange={confirmpasswordEnter}
                  value={confirmpassword}
                  placeholder="Confirm Password"
                />
                <i className="gg-password" style={iconstyle}></i>
              </div>
            </div>
            <div className="input-div5" >
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                style={iconstyle}
              ></i>

              <select
                className="input-bx5"
                value={selectedOption}
                onChange={handleOptionChange}
                style={{
                  height: "45px",
                  borderColor: "#007bff",
                  borderRadius: "5px",
                  marginLeft: "5px",
                  marginTop:'5px'
                }}
                required
              >
                <option value="not Selected">Please Select Field</option>
                <option value="Computer Engineering">
                  Computer Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="It Engineering">It Engineering</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Architecture Engineering">
                  Architecture Engineering
                </option>
                <option value="Automobile Engineering">
                  Automobile Engineering
                </option>

                <option value="Biomedical Engineering">
                  Biomedical Engineering
                </option>
              </select>
            </div>
            <div className="input-div5">
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                style={iconstyle}
              ></i>

              <select
                className="input-bx5"
                value={selectedField}
                onChange={handleFieldChange}
                style={{
               
                  height: "45px",
                  borderColor: "#007bff",
                  borderRadius: "5px",
                  marginLeft: "5px",
                 marginTop:'5px'
                }}
                required
              >
                <option value="not Selected">Please Select Graduation</option>
                <option value="Diploma">Diploma</option>

                <option value="B.tech">B.tech/BE</option>

                <option value="M.tech">M.Tech/ME</option>
              </select>
            </div>
            <div className="input-div5">
              <i
                className="fa fa-upload"
                aria-hidden="true"
                style={iconstyle1}
              ></i>

              <div
                className="mb-3"
                style={{
                  marginLeft: "12px",
                  width: "370px",
                  marginTop: "-20px",
                  border: "1px solid #000000",
                  borderRadius: "40px",
                  background: "transparent",
                }}
              >
                <span
                  className="span-text"
                  style={{ marginLeft: "20px", color: "#007bff" }}
                >
                  Upload Your Passport Size Image
                </span>
                <input
                  className="form-control"
                  type="file"
                  onChange={ImageEnter}
                  required
                />
              </div>
            </div>
            <div className="input-div5">
              <i
                className="fa fa-upload"
                aria-hidden="true"
                style={iconstyle1}
              ></i>

              <div
                className="mb-3"
                style={{
                  marginLeft: "12px",
                  width: "370px",
                  marginTop: "-20px",
                  border: "1px solid #000000",
                  borderRadius: "40px",
                  background: "transparent",
                }}
              >
                <span
                  className="span-text"
                  style={{ marginLeft: "20px",marginBottom:"15px", color: "#007bff" }}
                >
                  Upload Your Resume
                </span>
                <input
                  className="form-control"
                  type="file"
                  onChange={ResumeEnter}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="centered-button5"
                style={{ marginTop: "20px", fontFamily: "Poppins" }}
              >
                {loading == false ? "Register" : "Loading"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
