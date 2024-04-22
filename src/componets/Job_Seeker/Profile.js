import React from "react";
export default function Job_Seeker_Profile(props) {
  return (
    <>
      <section
        className="h-100 gradient-custom-2"
        style={{ marginLeft: "245px", marginBottom: "30px" }}
      >
        <div className="container py-5 h-100" style={{ width: "1000px" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card" style={{ width: "700px" }}>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#007bff", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src={props.user.image}
                      alt="Generic placeholder image"
                      className="w-100 rounded-3"
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{props.user.Name}</h5>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                ></div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">
                        Graduation- {props.user.qualification}
                      </p>
                      <p className="font-italic mb-1">
                        Field- {props.user.Field}
                      </p>
                      <p className="font-italic mb-1">
                        Experience-{" "}
                        {props.user.Experience != "0"
                          ? props.user.Experience + " Year"
                          : "Fresher"}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Resume</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <img
                        src={props.user.resume}
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
