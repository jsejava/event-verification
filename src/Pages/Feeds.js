import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import success from "../img/success.png";
import Select from "react-select";

//Form validation
const formSchema = Yup.object({
  code: Yup.string().required("Verification Code is required"),
});

const Feeds = () => {
  const [Empty, setEmpty] = useState(false);
  const [Pop, setPop] = useState(true);

  //initialize form
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      setPop(false);
      console.log("Pop is ", Pop);

      //Redirect
      setTimeout(() => {
        window.location.href = "https://schvarsity.com";
      }, 1500);
    },
  });

  const [school, setSchool] = useState("");
  const campus = [
    { value: "name", label: "LinkedIn" },
    { value: "name", label: "FaceBook" },
    { value: "name", label: "Intagram" },
    { value: "name", label: "twitter or X" },
    { value: "name", label: "YouTube" },
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

                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            width: "100%",
                            padding: "2px 20px",
                            marginTop: "20px",
                            border: " 1px solid #e4e4e4",
                            bordeRadius: "5px",
                            textAlign: "left",
                            marginBottom: "20px",
                          }),
                        }}
                        value={campus.value}
                        onChange={(value) => setSchool(value.value)}
                        options={campus}
                        placeholder="How did you hear about us?"
                      />
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
                    <p>Thank you for your feedback.</p>
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

export default Feeds;
