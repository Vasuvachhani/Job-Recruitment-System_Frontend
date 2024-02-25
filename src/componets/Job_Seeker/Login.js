import React from "react";
import myimage from "../images/jobber.avif";
import Login_Form_Controler from "./Login_Form_Controler";
export default function JobSeeker_Login()
{
    return(<><div className="container3">
    <div className="content">
        <Login_Form_Controler/>
    </div>
    {/* <div className="image-container">
      <img src={myimage} alt="Your image" className="im1"/>
    </div> */}
  </div></>)
}