import React from "react";
import Login from "./Admin/Login";
import Login_company from "./Company/Login";
import JobSeeker_Login from "./Job_Seeker/Login";
import { useParams,Navigate} from 'react-router-dom';
import HomeScreen from "./HomeScreen";

export default function Login_For()
{
    const { userId } = useParams();
    return(<>
   {userId==="admin"?<Login/>:userId==="company"?<Login_company/>:userId==="job_seeker"?<JobSeeker_Login/>:<Navigate to="/"/>}
    </>)
}