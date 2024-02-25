import React from "react";
import myimage from "../images/company.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_Form_Company from "./Login_Form_Company";
import "./Styles/login.css"

export default function Login_company()
{
   
    return (<><div >
    <div className="content">
      <Login_Form_Company/>

    </div>
    {/* <div className="image-container">
      <img src={myimage} alt="Your image" className="im1"/>
    </div> */}
  </div></>);
}