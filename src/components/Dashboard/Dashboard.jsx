import React from "react";
// import "./CSS/dashboard.css";
import "./Components/CSS/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUniversity } from "@fortawesome/free-solid-svg-icons";
import Table from "../Dashboard/Components/Table";
import Form from "./Components/form";
import Graph from "./Components/PlacementStats.jsx";
// import Company from "./Components/Company";
import AddCompany from "./Components/AddCompany";
// import Filter from "./Components/Filter";
import PastRecruiter from "./Components/PastRecruiter";
// import logo from "../../assests/images/Logo2.png"
import logo from "../../assests/images/Logo.svg"
import Update from "./Components/Update";
import CheckStatus from "./Components/CheckStatus";
import Testing from "./Components/testing";

export default function Dashboard() {

  //An array of object is created below as these states stores the value and on the basis of these states only conditional rendering takes place as on dashboard everything is rendered conditionally apart from left div 

  const [show, setShow] = React.useState({
    Data: false,
    Register: false,
    PlacementStats: false,
    FilterCandidates: false,
    PastRecuriters: false,
    CompanyStats: false,
    CompanyRegister: false,
    update: false,
    broadcast: false,
    checkStatus : false,
  });
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  // This function is triggered whenever any button is clicked, this function basically changes the state to true for corresponding button and sets all other states to false as it decides the conditional rendering that what to display/render 
  // React.useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     window.location.href = "/";
  //   }
  // }, []);
  function handleClick(props) {
    const tempShow = {
      Data: false,
      Register: false,
      PlacementStats: false,
      FilterCandidates: false,
      PastRecuriters: false,
      CompanyStats: false,
      CompanyRegister: false,
      update: false,
      broadcast: false,
      checkStatus: false,
    };
    if ("Data" != props) {
      tempShow.Data = false;
    } else {
      tempShow.Data = true;
    }
    if (props != "Register") {
      tempShow.Register = false;
    } else {
      tempShow.Register = true;
    }
    if (props != "PlacementStats") {
      tempShow.PlacementStats = false;
    } else {
      tempShow.PlacementStats = true;
    }
    if (props != "CompanyStats") {
      tempShow.CompanyStats = false;
    } else {
      tempShow.CompanyStats = true;
    }
    if (props != "FilterCandidates") {
      tempShow.FilterCandidates = false;
    } else {
      tempShow.FilterCandidates = true;
    }
    if (props != "PastRecuriters") {
      tempShow.PastRecuriters = false;
    } else {
      tempShow.PastRecuriters = true;
    }
    if (props != "CompanyRegister") {
      tempShow.CompanyRegister = false;
    } else {
      tempShow.CompanyRegister = true;
    }
    if (props != "update") {
      tempShow.update = false;
    } else {
      tempShow.update = true;
    }
    if(props != "broadcast") {
      tempShow.broadcast = false;
    } else {
      tempShow.broadcast = true;
    }
    if (props != "checkStatus") {
      tempShow.checkStatus = false;
    } else {
      tempShow.checkStatus = true;
    }
    setShow(tempShow);
  }

  // It returns the structure of this particular page

  return (
    <>
      <div className="main-div row">
        <div className=" shadow-lg col-md-2 left-div ">
          <img src={logo} style={{ width: "12vw", height:"12vh" }} className="mt-2"></img>
          <div
            className="options-div my-5 d-flex justify-content-center align-items-center"
            style={{ flexDirection: " column" }}
          >
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="Data"
              onClick={(e) => handleClick(e.target.name)}
            >
              Club  Data
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="Register"
              onClick={(e) => handleClick(e.target.name)}
            >
              Register Club
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="PlacementStats"
              onClick={(e) => handleClick(e.target.name)}
            >
              Club Statistics
            </button>
            {/* <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="FilterCandidates"
              onClick={(e) => handleClick(e.target.name)}
            >
              Filter Students
            </button> */}
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="PastRecuriters"
              onClick={(e) => handleClick(e.target.name)}
            >
              Past Events
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="CompanyRegister"
              onClick={(e) => handleClick(e.target.name)}
            >
              Add Student Position
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="update"
              onClick={(e) => handleClick(e.target.name)}
            >
              Update Posiiton
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="broadcast"
              onClick={(e) => handleClick(e.target.name)}
            >
              Broadcast
            </button>
            <button
              className="diff-btn my-3 p-1"
              style={{ borderRadius: "20px" }}
              name="checkStatus"
              onClick={(e) => handleClick(e.target.name)}
            >
              Upcoming Events
            </button>
          </div>
        </div>
        <div className="col-md-10 right-div">
          <div className="right-up">
            <div className="up1-div">
              <div className="name-div m-4">
                <div className="profile-div mt-1">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    style={{ color: "orange" }}
                  ></FontAwesomeIcon>{" "}
                  <span
                    className="mx-2"
                    style={{ color: "orange" }}
                    id="collegeName"
                  >
                    IIIT SURAT
                  </span>
                </div>
              </div>
              <div className="logout-div m-4">
                <FontAwesomeIcon
                  icon={faSignOut}
                  style={{ color: "orange" }}
                ></FontAwesomeIcon>{" "}
                <span style={{ color: "orange", cursor : 'pointer' }}  onClick={logout}>Logout</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            {show.Data && <Table />}
            {show.Register && <Form />}
            {show.PlacementStats && <Graph />}
            {/* {show.CompanyStats && <Company />} */}
            {show.CompanyRegister && <AddCompany />}
            {/* {show.FilterCandidates && <Filter />} */}
            {show.PastRecuriters && <PastRecruiter />}
            {show.update && <Update />}
            {show.broadcast && <Testing />}            
            {show.checkStatus && <CheckStatus />}

          </div>
        </div>
      </div>
    </>
  );
}
