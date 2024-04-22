/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Company_view from "./Company_view";


export default function Unverified_Company(props) {
  var [status, setStatus] = useState(false);
  var [visible, setVisible] = useState(true);

  var divstyle = {
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px 18px #c9c5c5",
    width: "1000px",
    height: "max-content",
    marginRight: "0px",
    marginTop: "30px",
    marginLeft: "350px",
    alignitems: "center",
    borderRadius: "10px",
    display: "flex",
  };
  function btnClick() {
    setStatus(true);
    setVisible(false);
  }
  function btclick() {
    setVisible(true);
    setStatus(false);
  }
  return (
    <>
      <div style={divstyle}>
        <div className="input-bx">
          <label className="ilebel">Company Name</label>
          <br />
          <label className="iline">{props.name}</label>
        </div>
        <div className="dline"></div>
        <div className="input-bx">
          <label className="ilebel">Mobile No.</label>
          <br />
          <label className="iline">{props.mobile}</label>
        </div>
        <div className="dline"></div>
        <div className="input-bx">
          <label className="ilebel">Email id</label>
          <br />
          <label className="iline">{props.email}</label>
        </div>
        <div className="dline"></div>

        {visible === true ? (
          <button
            className="centered-button1"
            onClick={btnClick}
            style={{
              fontFamily: "Poppins",
              marginLeft: "10px",
              marginTop: "34px",
              fontSize: "large",
              fontWeight: "bold",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            View <i class="fa fa-angle-down" aria-hidden="true"></i>
          </button>
        ) : (
          <button
            className="centered-button1"
            style={{
              fontFamily: "Poppins",
              marginLeft: "10px",
              marginTop: "30px",
              fontSize: "large",
              fontWeight: "bold",
            }}
            onClick={btclick}
          >
            Close <i class="arrow up"></i>
          </button>
        )}
      </div>
      {status === true ? (
        <Company_view
          status={props.status}
          img={props.image}
          name={props.name}
          address={props.address}
          mobile={props.mobile}
          verified={props.verified}
          email={props.email}
        />
      ) : (
        (status = false)
      )}
    </>
  );
}
