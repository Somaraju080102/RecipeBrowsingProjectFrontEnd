import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "./RecipeUserContext";
import { useContext, useState } from "react";

export function RecipeLoginUp() {
  const navigate = useNavigate();

  const { handleLogin } = useContext(UserContext);

  const { handleEmail } = useContext(UserContext);

  const { handleRecipeId } = useContext(UserContext);

  // const[username, setUsername] =useState("");

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/login",
          values
        );
        console.log(response.data.at(0) + " " + response.data.at(1));
        if (response.data.at(0) !== "success") {
          handleLogin(response.data.at(0));
          handleEmail(values.userEmail);
          handleRecipeId(response.data.at(1));
          navigate("/recipes");
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error(error);
        alert("Invalid credentials");
      }
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      userPassword: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjI3NjQ5ODQ5&ixlib=rb-1.2.1&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <header
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          RecipeBrowsing - Login
        </header>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="userEmail"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.userEmail}
              required
            />
            <small className="text-danger">{formik.errors.userEmail}</small>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="userPassword"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.userPassword}
              required
            />
            <small className="text-danger">{formik.errors.userPassword}</small>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Login
          </button>

          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
