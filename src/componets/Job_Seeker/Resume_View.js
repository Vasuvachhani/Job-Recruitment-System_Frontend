import axios from "axios";
import React, { useEffect, useState } from "react";
import Job_Seeker_Profile from "./Profile";
import ResumeBuilder from "./ResumeBuilder";
import ResumeTemplete from "./Resume_Templete";
export default function Resume_View(props)
{
    var [user,setUser]=useState();
    var [data,setData]=useState(false);
    const email=window.localStorage.getItem("email");
    function datahandle(data)
    {

        console.log(data);
        setData(data);
        alert("Your resume Create SuccessFully")
        window.location.reload();
        
    }
    return(<>
          {props.user.status == "true" && props.user.resume == "true" ? (
        <ResumeTemplete user={props.user} mleft="100px" />
      ) : null}
      {props.user.status == "false" && props.user.resume == "null" && data==false ? (
        <ResumeBuilder user={props.user} setdata={datahandle} />
      ) : null}
      {(props.user.resume != "true") &&
      props.user.status == "true" ? (
        <Job_Seeker_Profile user={props.user} />
      ) : null}

    </>)
}