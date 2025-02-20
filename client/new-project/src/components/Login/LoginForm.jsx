import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

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
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow p-4 mt-5" style={{ width: "400px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Login</h2>
          <button
            className="btn-close"
            onClick={() => setIsVisible(false)}
            aria-label="Close"
          ></button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...formik.getFieldProps("password")}
                className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-outline-secondary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback d-block">{formik.errors.password}</div>
              )}
            </div>
          </div>
          <NavLink to='/signup'>Not a User ?</NavLink>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mt-3" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;
