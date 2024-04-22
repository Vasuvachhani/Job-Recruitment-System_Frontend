import React,{ useState,useEffect} from "react";
import axios from "axios";
import Unverified_Company from "./Unverified_Companies";

import Company_view from "./Company_view";

export default function Verified_Company()
{
    const [user, setUserData] = useState({Data:[]});
    useEffect(() => {
        axios.get("http://localhost:3000/verified_company_data")
          .then((response) => {
            setUserData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
        
      }
      
      , []);
      console.log(user.Data);
    return(<>
     <h1 style={{marginLeft:"520px",marginTop:"20px"}}>Verified Company List:-</h1>
      {user.Data.map((company) => (
        <div key={company._id}><Company_view status="verified"name={company.Company_name} mobile={company.Mobile_no} email={company.Email} img={company.Certificate} address={company.Address} verfied={company.Verified}/></div>
      ))}</>)
}