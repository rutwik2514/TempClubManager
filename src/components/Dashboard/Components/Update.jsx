import React from "react";
import axios from "axios";
import "./CSS/Update.css";
// import { ToastContainer, toast } from 'react-toastify';

export default function Update() {
  //states to store data
  const [formdata, setFormdata] = React.useState({
    rollNo: "",
    name: "",
    branch: "",
    yearOfPassingOut: "",
  });
  const [show1, setShow1] = React.useState(true);
  const [show2, setShow2] = React.useState(false);
  const [data, setData] = React.useState();

  //delete permanently data of particular user
  function handleDelete(prop) {
    const data1 = {
      _id: prop,
    };
    // axios
    //   .post("http://localhost:8000/api/v1/record/deleteUser", data1)
    //   .then((res) => {
    //     toast.success("Data successfully deleted");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  //setting values as per input fields are changed
  function handleChange(event) {
    setFormdata((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  //it posts data to backend, verifies if user exisit and then redirects to another page
  function saveData1() {
    const data = { ...formdata };
    console.log(data);
    // axios
    //   .post("http://localhost:8000/api/v1/record/getUpdateQuery", data)
    //   .then((res) => {
    //     if (res.data.length != 0) {
    //       console.log(res);
    //       console.log(res.data);
    //       setData(res.data);
    //     } else {
    //       toast.error("Invalid User");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("Invalid User");
    //   });
  }

  //after we validate that user is valid, then we show next page by setting show2 to true
  React.useEffect(() => {
    if (data) {
      setShow1(false);
      setShow2(true);
    }
  }, [data]);

  //here we send updated information to backend so that it updates info in database
  function saveData2() {
    if (data.linkedIn == "") {
      data.linkedIn = "NA";
    }
    if (data.github == "") {
      data.github = "NA";
    }
    if (data.resumeLink == "") {
      data.resumeLink = "NA";
    }
    if (data.currentStatus != "Hired") {
      data.isSelected = false;
    }
    // axios
    //   .patch("http://localhost:8000/api/v1/record/updateUserData", data)
    //   .then((res) => {
    //     console.log(res);
    //     toast.success("Data updated Successfully")
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  //sets data according to change in input field
  function handleChange1(props, value) {
    setData((prevdata) => {
      return {
        ...prevdata,
        [props]: value,
      };
    });
  }

  return (
    <>
      <section className="" style={{ width: "85vw" }}>
        {show1 && (
          <div className="form-div d-flex justify-content-center ">
            <div className="card col-md-5 shadow p-3 mb-5 bg-white rounded w-75">
              <div className="d-flex justify-content-center pt-2 pb-2 mb-2 mt-1">
                <h4>Student Details</h4>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveData1();
                }}
              >
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Club Name.
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="rollNo"
                      value={formdata.rollNo}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      placeholder="Enter Club Name."
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Student Name
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="name"
                      value={formdata.name}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      placeholder="Enter student name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Current Position
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="branch"
                      value={formdata.branch}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      placeholder="Enter Current Position"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Updated Position
                  </label>
                  <div className="col-md-5">
                    <input
                      // type="number"
                      name="yearOfPassingOut"
                      value={formdata.yearOfPassingOut}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={handleChange}
                      placeholder="Enter Updated Position"
                      required
                    />
                  </div>
                </div>

                <div
                  className="btn-div d-flex justify-content-center"
                  id="btn-div"
                >
                  <button type="submit" className="btn btn-custom1 p-1 mt-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {show2 && (
          <div className="form-div d-flex justify-content-center ">
            <div className="card col-md-5 shadow p-3 mb-5 bg-white rounded w-75">
              <div className="d-flex justify-content-center pt-2 pb-2 mb-2 mt-1">
                <h4>Student Details</h4>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveData2();
                }}
              >
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Student Name
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter student name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Contact No.
                  </label>
                  <div className="col-md-5">
                    <input
                      type="tel"
                      name="contactNo"
                      value={data.contactNo}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter contact Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Branch
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="branch"
                      value={data.branch}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter branch name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Year of Graduation
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      name="yearOfPassingOut"
                      value={data.yearOfPassingOut}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter graduation year"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Gender
                  </label>
                  <div className="col-md-5">
                    <select
                      className="form-select p-1"
                      aria-label="Default select example"
                      value={data.gender}
                      name="gender"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    CGPA
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      step="0.01"
                      name="CGPA"
                      value={data.CGPA}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter CGPA"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Age
                  </label>
                  <div className="col-md-5">
                    <input
                      type="number"
                      name="age"
                      value={data.age}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter Age"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Email ID
                  </label>
                  <div className="col-md-5">
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter Email ID"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Degree
                  </label>
                  <div className="col-md-5">
                    <select
                      className="form-select p-1"
                      aria-label="Default select example"
                      value={data.degree}
                      name="degree"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                    >
                      <option value="BTech">BTech</option>
                      <option value="BE">BE</option>
                      <option value="BSc">BSc</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    LinkedIn
                  </label>
                  <div className="col-md-5">
                    <input
                      type="url"
                      name="linkedIn"
                      value=""
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter linkedIn link"
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Github
                  </label>
                  <div className="col-md-5">
                    <input
                      type="url"
                      name="github"
                      value=""
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter github link"
                    />
                  </div>
                </div>

                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4"
                  >
                    Resume
                  </label>
                  <div className="col-md-5">
                    <input
                      type="url"
                      name="resumeLink"
                      value=""
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter resumeLink"
                    />
                  </div>
                </div>
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Current Status
                  </label>
                  <div className="col-md-5">
                    <select
                      className="form-select p-1"
                      aria-label="Default select example"
                      value={data.currentStatus}
                      name="currentStatus"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Hired">Hired</option>
                      <option value="NA">NA</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Interview Date
                  </label>
                  <div className="col-md-5">
                    <input
                      type="date"
                      name="interviewDate"
                      value={data.interviewDate}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter student name"
                    />
                  </div>
                </div>
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    CTC Offered:
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="CTC_offered"
                      value={data.CTC_offered}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter student name"
                    />
                  </div>
                </div>
                <div className="form-group row m-2">
                  <label
                    htmlFor="colFormLabelSm"
                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                  >
                    Company:
                  </label>
                  <div className="col-md-5">
                    <input
                      type="text"
                      name="selectedBy"
                      value={data.selectedBy}
                      className="form-control form-control-sm px-1"
                      id="colFormLabelSm"
                      onChange={(e) =>
                        handleChange1(e.target.name, e.target.value)
                      }
                      placeholder="Enter student name"
                    />
                  </div>
                </div>

                <div
                  className="btn-div d-flex justify-content-center"
                  id="btn-div"
                >
                  <button type="submit" className="btn btn-custom1 p-1 mt-3">
                    Submit
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-danger p-1 mt-3"
                  onClick={() => handleDelete(data._id)}
                  id="del_Button"
                >
                  Delete my Data Permanently
                </button>
              </div>
            </div>
            {/* <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            /> */}
          </div>
        )}
      </section>
    </>
  );
}
