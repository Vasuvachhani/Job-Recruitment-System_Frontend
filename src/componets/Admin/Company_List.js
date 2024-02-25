import axios from "axios";
import React, { useEffect, useState } from "react";
import Unverified_Company from "./Unverified_Companies";

export default function Company_List() {
  const [user, setUserData] = useState({Data:[]});

  useEffect(() => {
    axios.get("http://localhost:3000/company_data")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  console.log(Array.isArray(user));
console.log(user.Data);

  return (
    <>
    <h1 style={{marginLeft:"670px",marginTop:"25px"}}>Company List</h1>
      {user.Data.map((company) => (
        <div key={company._id}><Unverified_Company status="unverified" name={company.Company_name} mobile={company.Mobile_no} email={company.Email} image={company.Certificate} address={company.Address} verfied={company.Verified}/></div>
      ))}
     
    </>
  );
}
