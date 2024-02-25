import React from "react";
import myimage from "../images/admin.avif"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_Form from "./Login_Form";
import "./Styles/login.css"


export default function Login()
{
    return (<>
    <div>
      <div >
        <Login_Form/>
      </div>
      {/* <div className="image-container">
        <img src={myimage} alt="Your mage" className="im" />
      </div> */}
    </div>
     </>)
}