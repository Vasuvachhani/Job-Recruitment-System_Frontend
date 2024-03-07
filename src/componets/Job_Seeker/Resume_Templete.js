import axios from "axios";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

export default function ResumeTemplete(props) {
  var [data, setData] = useState();

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:3000/get_resume_data", {
        email: props.user.Email,
      })
      .then((data) => {
        setData(data.data.data);
        if (data) {
          data.skill.map((data) => {
            console.log(data);
          });
          console.log(props.user.image);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handleImageLoad() {
    setImageLoaded(true);
  }

  // function download()
  // {

  //     window.print(document.getElementById("di"))

  // }

  function generatePDF() {
    const contentToPrint = document.getElementById("di");

    // Use domtoimage to capture the content and convert it to a canvas
    domtoimage
      .toPng(contentToPrint)
      .then((dataUrl) => {
        // Create a canvas element and set its dimensions
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = contentToPrint.clientWidth;
        canvas.height = contentToPrint.clientHeight;

        // Create an image object and draw the data URL onto the canvas
        const img = new Image();
        img.src = dataUrl;
        img.onload = function () {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Create a PDF document
          const pdf = new jsPDF("p", "mm", "a2");
          const width = pdf.internal.pageSize.getWidth();
          const height = (canvas.height * width) / canvas.width;

          // Add the canvas content to the PDF
          pdf.addImage(canvas, "PNG", 0, 0, width, height);

          // Save the PDF with the desired name
          pdf.save("MyResume.pdf");
        };
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  }

  return (
    <>
      <div style={{ marginLeft: props.mleft }}>
        <div class="resume-main" id="di">
          <div class="left-box">
            <br />
            <br />
            <div class="profile">
              <img src={props.user.image} />
            </div>
            <div class="content-box">
              <h2>Profile Info</h2>
              <hr class="hr1" />
              {data ? <p class="p1">{data.objective}</p> : null}

              <h3>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                {props.user.Email}
              </h3>
              <h3>
                <i class="fa fa-phone" aria-hidden="true"></i>
                {props.user.Mobile_no}
              </h3>

              <br />
              <br />
              <h2>My Skills</h2>
              <hr class="hr1" />
              <br />
              {data
                ? data.skill.map((skill, index) => (
                    <>
                      <div class="clearfix"></div>
                      <div class="col-div-6">
                        <p class="p2" key={index}>
                          {skill}{" "}
                        </p>
                      </div>
                      <div class="col-div-6">
                        <i class="fa fa-circle circle"></i>
                        <i class="fa fa-circle circle"></i>
                        <i class="fa fa-circle circle"></i>
                      </div>
                    </>
                  ))
                : null}

              <div class="clearfix"></div>
            </div>
          </div>

          <div class="right-box">
            <h1>{props.user.Name}</h1>
            <p class="p3">{data ? data.Field : null}</p>

            <br />
            <h2 class="heading">Work Experience</h2>
            <hr class="hr2" />
            <br />
            {props.user.Experience == "0" ? (
              <div class="col-div-4">
                <p class="p5">Fresher</p>
              </div>
            ) : (
              <>
                <div class="col-div-4">
                  <p class="p5">{data ? data.Starting_date : null}</p>

                  <p class="p5" style={{ marginLeft: "35px" }}>
                    To
                  </p>

                  <p class="p5">{data ? data.Ending_date : null}</p>
                  <span class="span1">
                    <i class="fa fa-building-o" aria-hidden="true"></i>
                    {data ? data.Description : null}
                  </span>
                </div>
                <div class="col-div-8">
                  <p class="p5">{data ? data.title : null}</p>
                  <span class="span1">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    {data ? data.working_location : null}
                  </span>
                </div>
              </>
            )}

            <div class="clearfix"></div>

            <br />
            <h2 class="heading">My Education</h2>
            <hr class="hr2" />
            <br />
            <div class="col-div-4">
              <p class="p5">{data ? data.GraduationYear : null}</p>
              <span class="span1">
                <i class="fa fa-university" aria-hidden="true"></i>
                {data ? data.college : null}
              </span>
            </div>
            <div class="col-div-8">
              <p class="p5">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                {props.user.Field}
              </p>
              <span class="span1">
                <i class="fa fa-certificate" aria-hidden="true"></i>Cpi:-
                {data ? data.cpi : null}
              </span>
            </div>
            <div class="clearfix"></div>
            <br />

            <div className="clearfix"></div>
            <h2 style={{ marginTop: "20px" }} className="heading">
              Hobbies
            </h2>
            <hr />

            <div class="col-div-3 col3">
              <i class="fa fa-futbol-o in"></i>
              {data ? <span className="dark">{data.hobbies}</span> : null}
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      {props.type != "company" ? (
        <button
          className="centeredd-button"
          style={{
            marginLeft: "720px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
          onClick={generatePDF}
        >
          Download
        </button>
      ) : null}{" "}
    </>
  );
}
