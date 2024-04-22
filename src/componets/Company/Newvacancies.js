import React, { useState } from "react";
import image from "../images/vacancies.webp";
import axios from "axios";

export default function NewVacancies() {
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [number, setNumber] = useState("");
  const [packages, setPackage] = useState("");
  const [selectedOption, setSelectedOption] = useState("not selected");
  const [selectedField, setSelectedField] = useState("not selected");
  const [loading, setLoading] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (selectedOption === "not selected" || selectedField === "not selected") {
      setLoading(false);
      alert("Please fill all details first.");
    } else {
      axios
        .post("http://localhost:3000/add_vacancy", {
          email: window.localStorage.getItem("email"),
          Experience: experience,
          job_description: jobDescription,
          package: packages,
          qualification: selectedField,
          number_of_places: number,
          Field: selectedOption,
        })
        .then((response) => {
          if (response.data.data === "success") {
            setJobDescription("");
            setExperience("");
            setNumber("");
            setPackage("");
            setSelectedField("not selected");
            setSelectedOption("not selected");
            setLoading(false);
            alert("Vacancy added successfully.");
          } else {
            setLoading(false);
            alert(response.data.data);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <>
      <div className="container">
        <img
          src={image}
          className="card-img-top"
          alt="Vacancies"
          style={{ width: "400px", height: "300px" }}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              className="form-control"
              id="jobDescription"
              rows="3"
              value={jobDescription}
              onChange={(e) => handleChange(e, setJobDescription)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="number"
              className="form-control"
              id="experience"
              value={experience}
              onChange={(e) => handleChange(e, setExperience)}
              min={0}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Number of Vacancies</label>
            <input
              type="number"
              className="form-control"
              id="number"
              value={number}
              onChange={(e) => handleChange(e, setNumber)}
              min={1}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="selectedOption">Field</label>
            <select
              className="form-control"
              id="selectedOption"
              value={selectedOption}
              onChange={(e) => handleChange(e, setSelectedOption)}
              required
            >
              <option value="not Selected">Not Selected</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
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

              {/* Add other options */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="packages">Package</label>
            <input
              type="number"
              className="form-control"
              id="packages"
              value={packages}
              onChange={(e) => handleChange(e, setPackage)}
              min={0}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="selectedField">Qualification</label>
            <select
              className="form-control"
              id="selectedField"
              value={selectedField}
              onChange={(e) => handleChange(e, setSelectedField)}
              required
            >
              <option value="not Selected">Not Selected</option>
              <option value="Diploma">Diploma</option>
              <option value="B.tech">B.tech/BE</option>

              <option value="M.tech">M.Tech/ME</option>
              {/* Add other options */}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ marginTop: "20px", width: "120px" }}
          >
            {loading ? "Loading..." : "Save"}
          </button>
        </form>
      </div>
    </>
  );
}

