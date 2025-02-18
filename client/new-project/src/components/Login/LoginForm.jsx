import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      await onSubmit(values);
      setSubmitting(false);
    },
  });

  if (!isVisible) return null;

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <button
          className="close-btn"
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          X
        </button>
      </div>
      <form onSubmit={formik.handleSubmit} className="login-form">
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="form-input"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              className="form-input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="error-text">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-btn" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
