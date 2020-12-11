import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.jpeg";
import "./Form.scss";

const signInSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is Required")
    .min(3, "Your name is too short- should be 3 chars min"),
  lastName: Yup.string()
    .required("Last Name is Required")
    .min(3, "Your last name is too short- should be 3 chars min"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
  confirmPassword: Yup.string()
    .required("Confirm Password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  agreeToTerms: Yup.boolean()
    .label("Terms")
    .test(
      "is-true",
      "Must agree to terms to continue",
      (value) => value === true
    )
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false
};

const SıgnInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <div className="header">
              <img src={logo} alt="clarusway_logo" />
              <h1> Welcome to Clarusway </h1>
            </div>
            <Form>
              <div className="form-row">
                <label htmlFor="firstName"></label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder=" First Name"
                  autoFocus
                  className={
                    errors.firstName && touched.firstName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-row">
                <label htmlFor="lastName"></label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className={
                    errors.lastName && touched.lastName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-row">
                <label htmlFor="email"></label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Adress"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password"></label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  secureTextEntry
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />

                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>

              <div className="form-row">
                <label htmlFor="confirm-password"></label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  secureTextEntry
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <Field
                  type="checkbox"
                  name="agreeToTerms"
                  id="agree-terms"
                  className={
                    errors.agreeToTerms && touched.agreeToTerms
                      ? "input-error"
                      : null
                  }
                />

                <label htmlFor="agree-terms" id="agree-label">
                  I accept the <a href="#"> Privacy Policiy</a>
                </label>

                <ErrorMessage
                  name="agreeToTerms"
                  component="span"
                  className="error"
                />
              </div>
              <div className="footer">
                <button
                  type="submit"
                  className={isValid ? "" : "disabled-btn"}
                  disabled={!dirty}
                >
                  Register
                </button>

                <div>
                  <label>
                    {" "}
                    Already have an account ? <a href="#"> Login </a>
                  </label>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SıgnInForm;
