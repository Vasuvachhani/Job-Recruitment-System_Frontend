import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobber_details from "./Jobber_Details";
import Visitor_details from "./Visitor_Details";
import NotFound from "./NotFound";

export default function Jobber_Visit_Request() {
  var [rdata, setRdata] = useState([]);
    var [refresh,setRefresh]=useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:3000/visit_request_List", {
        cemail: window.localStorage.getItem("email"),
        Approve: "false",
      })
      .then((data) => {
        console.log(data.data.vsd);
        setRdata(data.data.vsd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
    axios
    .post("http://localhost:3000/visit_request_List", {
      cemail: window.localStorage.getItem("email"),
      Approve: "false",
    })
    .then((data) => {
      console.log(data.data.vsd);
      setRdata(data.data.vsd);
    })
    .catch((err) => {
      console.log(err);
    });
  },[refresh])
  function setresponsedata(e)
  {
    setRefresh(true);
  }
  return (<>
    <div style={{ width: "900px", marginLeft: "370px",marginTop:"20px"}}>
            <label className="parent_label" style={{ marginLeft: "0px" }}>Visit Requests</label>
            {rdata.length === 0 ? <NotFound data="No visit requests are available at the moment." /> : null}

            {rdata ? rdata.map((obj, index) => (
        <Visitor_details email={obj.Jobber_email} date={obj.Date} time={obj.Time} datahandler={setresponsedata}/>
    )):null}
    </div>
    </>) ;
}
