import React from "react";
import axios from "axios";
import "./CSS/form.css";
// import { ToastContainer, toast } from 'react-toastify';

export default function Form() {

    // Made states for all the entries in the form 

    // const [formdata, setFormdata] = React.useState({
    //     rollNo: "",
    //     name: "",
    //     contactNo: "",
    //     branch: "",
    //     yearOfPassingOut: "",
    //     CGPA: "",
    //     email: "",
    //     age: "",
    //     linkedIn: "NA",
    //     github: "NA",
    //     resumeLink: "NA"
    // });

    // Temporaray state to store the value of formdata's initial value

    // const [temp, setTemp] = React.useState(formdata);

    // Made states for drop down input field of form 

    const [gender, setGender] = React.useState("male");
    const [degree, setDegree] = React.useState("BTech");

    // This function handles all the changes in the input field i.e while entering company name, event.target.name and event.target.value helps specifying that in which field value has been updated.

    // function handleChange(event) {
    //     setFormdata((prevdata) => {
    //         return {
    //             ...prevdata,
    //             [event.target.name]: (event.target.value)
    //         };
    //     });
    // }

    // This function posts the data provided in the input fields to the particular route provided below and apart from posting the data it is also typecasting variables, in the function below if data entry is year or age it is converting it into number whereas float when it CGPA    

    // function saveData() {
    //     const data = { ...formdata, gender: gender, instituteName: "IIIT SURAT" };
    //     for (var i in data) {
    //         if (i == "yearOfPassingOut" || i == "age") {
    //             data[i] = Number(data[i]);
    //         }
    //         else if (i == "CGPA") {
    //             data[i] = parseFloat(data[i]);
    //         }
    //     }
    //     console.log(data);
    //     // axios.post("http://localhost:8000/api/v1/record/createData", data)
    //     //     .then(() => {
    //     //         toast.success("Student Sucessfully Registered");
    //     //     }).catch((err) => {
    //     //         console.log(err);
    //     //     })
    // }

    // This function is triggered when form is submitted and it basically empties all the fields of the form

    // function fun() {
    //     setFormdata(temp);
    // }

    // It returns the structure of this particular page

    return (
        <>
            <section className="" style={{ width: "85vw" }}>
                <div className="form-div d-flex justify-content-center ">
                    <div className="card col-md-5 p-2 shadow p-3 mb-5 bg-white rounded w-75">
                        <div className="d-flex justify-content-center pt-2 pb-2 mb-2 mt-1">
                            <h4>Club Details</h4>
                        </div>
                        <form
                            // onSubmit={(e) => {
                            //     e.preventDefault();
                            //     saveData();
                            //     fun();
                            // }}
                        >
                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Enter Club Number.
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="rollNo"
                                        // value={formdata.rollNo}
                                        className="form-control form-control-sm px-1"
                                        placeholder="Enter Club No."
                                        // onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Club Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="name"
                                        // value={formdata.name}
                                        className="form-control form-control-sm px-1"
                                        // onChange={handleChange}
                                        placeholder="Enter Club name"
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
                                        // value={formdata.contactNo}
                                        className="form-control form-control-sm px-1"
                                        // onChange={handleChange}
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
                                    College
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        name="branch"
                                        // value={formdata.branch}
                                        className="form-control form-control-sm px-1"
                                        // onChange={handleChange}
                                        placeholder="Enter College name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Year of Establishment
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        name="yearOfPassingOut"
                                        // value={formdata.yearOfPassingOut}
                                        className="form-control form-control-sm px-1"
                                        // onChange={handleChange}
                                        placeholder="Enter Established year"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group row m-2">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-md-4 col-form-label col-form-label-sm ps-4 required"
                                >
                                    Lead Name
                                </label>
                                <div className="col-md-5">
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="CGPA"
                                        // value={formdata.CGPA}
                                        className="form-control form-control-sm px-1"
                                        // onChange={handleChange}
                                        placeholder="Enter Lead Name"
                                        required
                                    />
                                </div>
                            </div>
                           

                            <div className="btn-div d-flex justify-content-center" id="btn-div">
                                <button type="submit" className="btn btn-custom1 p-1 mt-2">Submit</button>
                            </div>

                        </form>
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
            </section>
        </>
    )
}