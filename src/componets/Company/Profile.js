import React, { useEffect, useState } from "react";

import axios from "axios";
export default function Profile() {
  var [logo, setLogo] = useState();
  var [description, setDescription] = useState();
  const [user, setUserData] = useState({ Data: [] });
  const [images, setImages] = useState([]);

  useEffect(() => {
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
    axios
      .post("http://localhost:3000/company_dashboard_data", {
        email: window.localStorage.getItem("email"),
      })
      .then((obj) => {
        console.log(obj);
        if (obj.data.data === true) {
          console.log(obj.data.details.logo);
          setLogo(obj.data.details.logo);
          setImages(obj.data.details.company_images);
          setDescription(obj.data.details.description);
        }
      });
  }, []);
  const mid = Math.ceil(images.length / 2);
  const leftColumn = images.slice(0, mid);
  const rightColumn = images.slice(mid);
  return (
    <>
      <section
        className="h-100 gradient-custom-2"
        style={{ marginLeft: "245px" }}
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
                      src={logo}
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{user.Company_name}</h5>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  {/* <div class="d-flex justify-content-end text-center py-1">
                <div>
                  <p class="mb-1 h5">253</p>
                  <p class="small text-muted mb-0">Photos</p>
                </div>
                <div class="px-3">
                  <p class="mb-1 h5">1026</p>
                  <p class="small text-muted mb-0">Followers</p>
                </div>
                <div>
                  <p class="mb-1 h5">478</p>
                  <p class="small text-muted mb-0">Following</p>
                </div>
              </div> */}
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Description</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">{description}</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="lead fw-normal mb-1">
                        Address-{user.Address}
                      </p>
                      <p className="lead fw-normal mb-1">
                        Mobile-{user.Mobile_no}
                      </p>
                      <p className="lead fw-normal mb-1">Email-{user.Email}</p>
                      <p className="lead fw-normal mb-1">
                        Certificate-
                        <img
                          src={user.Certificate}
                          className="w-100 rounded-3"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                  </div>
                  <div className="row g-2">
                    <div class="col mb-2">
                      {leftColumn.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Image ${index}`}
                          className="w-100 rounded-3"
                          style={{ height: "200px", margin: "10px" }}
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
                          style={{ height: "200px", margin: "10px" }}
                        />
                      ))}
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
