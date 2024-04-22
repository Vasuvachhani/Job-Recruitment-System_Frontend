import axios from "axios";
import React, { useState, useEffect } from "react";
import Vacancy_view from "./Vacancy_view";
import Company_view from "../Admin/Company_view";
export default function Visit_Request() {
  const [user, setUserData] = useState({ Data: [] });
  useEffect(() => {
    axios
      .get("http://localhost:3000/verified_company_data")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  return (
    <>
      {" "}
      <label
        className="parent_label"
        style={{ marginLeft: "700px", marginTop: "20px" }}
      >
        Company List :
      </label>
      {user.Data.map((company) => (
        <div key={company._id}>
          <Company_view
            show="true"
            status="verified"
            name={company.Company_name}
            mobile={company.Mobile_no}
            email={company.Email}
            img={company.Certificate}
            address={company.Address}
            verfied={company.Verified}
          />
        </div>
      ))}
    </>
  );
}
