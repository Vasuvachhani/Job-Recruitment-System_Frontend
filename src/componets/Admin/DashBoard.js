import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SideBar from "./SideBar";

export default function DeshBoard()
{
    const history = useNavigate();

    const token=window.localStorage.getItem("token");
    useEffect(()=>{
        if(token==null)
        {
            history("/login/admin")
        }
    })  
    
    console.log(token);
    return(<>
    <SideBar/>
    </>);
}