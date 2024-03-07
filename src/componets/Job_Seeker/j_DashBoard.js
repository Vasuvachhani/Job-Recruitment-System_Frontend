import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Job_Seeker_SideBar from "./Job_Seeker_Sidebar";
import axios from "axios";

export default function J_dashboad() {
  const history = useNavigate();
  var [user, setUser] = useState();
  const email = window.localStorage.getItem("email");
  useEffect(() => {}, []);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (token == null) {
      history("/login/job_seeker");
    }
  }, []);
  return (
    <>
      <Job_Seeker_SideBar />
    </>
  );
}
