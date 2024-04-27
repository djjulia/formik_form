import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components
import "./styles.css"; // Import the CSS file with styles

function App() {
  // Define validation function
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  // Define form submission function
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Login Successful");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="form-container"> {/* Container for the form */}
      {/* Formik component wraps the form */}
      {/* TODO: Declare a variable called formik and initialize it with Formik */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          // Form component represents the form
          <Form>
            <div className="form-group"> {/* Group for the email field */}
              <label htmlFor="emailField" className="form-label">Email:</label> {/* Label for the email field */}
              {/* Field component represents form fields */}
              <Field type="email" id="emailField" name="email" className="form-input" /> {/* Input for email */}
              {/* ErrorMessage component displays error messages */}
              <ErrorMessage name="email" component="div" className="error-message" /> {/* Error message for email field */}
            </div>
            <div className="form-group"> {/* Group for the password field */}
              <label htmlFor="pswField" className="form-label">Password:</label> {/* Label for the password field */}
              <Field type="password" id="pswField" name="password" className="form-input" /> {/* Input for password */}
              <ErrorMessage name="password" component="div" className="error-message" /> {/* Error message for password field */}
            </div>
            {/* Submit button */}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;