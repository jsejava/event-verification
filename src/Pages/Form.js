import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import success from "../img/success.png";

import Select from "react-select";

//Form validation
const formSchema = Yup.object({
  code: Yup.string().required("Verification Code is required"),
});

const Form = () => {
  const [Empty, setEmpty] = useState(false);
  const [Pop, setPop] = useState(true);
  const history = useHistory();

  //initialize form
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      if (values.code.trim().length === 0) return setEmpty(true);
      setPop(false);

      //Redirect
      setTimeout(() => {
        history.push("/feeds");
      }, 1500);
    },
    validationSchema: formSchema,
  });

  const [school, setSchool] = useState("");
  const campus = [
    { value: "name", label: "John Ametepey" },
    { value: "name", label: "Ahasam Abdulail" },
    { value: "name", label: "Deon Sussi" },
    { value: "name", label: "John Golo" },
    { value: "name", label: "Kalu Mala" },
    { value: "name", label: "Yeboa Kobi" },
  ];

  return (
    <>
      <section
        className="py-5 vh-100"
        style={{
          backgroundColor: "#232a49",
        }}
      >
        <div className="container text-center">
          <div className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src="https://schvarsity.com/build/assets/140%20x%2030%20px-12%201-e3f6f559.png"
              alt="SVGeXPENSES"
              width="500"
            />
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-4 mx-auto">
              <div
                className="p-4 shadow-sm rounded"
                style={{
                  backgroundColor: "#FEF4EA",
                  height: 350,
                }}
              >
                {Pop ? (
                  <>
                    <form onSubmit={formik.handleSubmit}>
                      <span className="text-muted display-8">
                        Schvasity Event
                      </span>
                      <h2 className="mb-4 fw-light">
                        <b>Verification Form</b>
                      </h2>

                      <small
                        style={{
                          color: "blue",
                          fontSize: 16,
                          marginTop: "20px",
                        }}
                      >
                        Full Name
                      </small>

                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            width: "100%",
                            padding: "2px 20px",
                            border: " 1px solid #e4e4e4",
                            bordeRadius: "5px",
                            textAlign: "left",
                            marginBottom: "20px",
                          }),
                        }}
                        value={campus.value}
                        onChange={(value) => setSchool(value.value)}
                        options={campus}
                        placeholder="Select or Search Full Name"
                        required
                      />
                      {true ? (
                        <>
                          <small
                            style={{
                              color: "blue",
                              fontSize: 16,
                            }}
                          >
                            Verification Code
                          </small>
                          <div className="mb-3 input-group">
                            <input
                              value={formik.values.code}
                              onBlur={formik.handleBlur("code")}
                              onChange={formik.handleChange("code")}
                              className="form-control"
                              type="text"
                              placeholder="Enter Verification Code"
                              // required
                            />
                          </div>

                          {/* Err */}
                          <div className="text-danger mb-2">
                            {formik.touched.code && formik.errors.code}
                            {Empty && formik.values.code.trim().length <= 0 ? (
                              <label>Wrong Verification Code</label>
                            ) : (
                              ""
                            )}
                          </div>

                          <button
                            type="submit"
                            className="btn mb-4 w-100"
                            style={{
                              backgroundColor: "#E4572E",
                              color: "#fff",
                            }}
                          >
                            Submit
                          </button>
                        </>
                      ) : null}
                    </form>
                  </>
                ) : (
                  <div
                    style={{
                      fontSize: 25,
                      margin: 80,
                    }}
                  >
                    <img
                      className="img-fluid"
                      src={success}
                      alt="SVGeXPENSES"
                      width="100"
                    />
                    <p>You have been verified</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
