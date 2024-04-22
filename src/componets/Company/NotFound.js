import React from "react";

import image from "../images/sorry.webp";
export default function NotFound(props)
{
    return(<><div class="shadow-lg p-3 mb-5 bg-white rounded" style={{textAlign:"center"}}><img src={image} style={{width:"30%"}} alt="Company Image"/><ul className="span-text" style={{marginRight:"20px"}}>
     {props.data}</ul></div></>)
}