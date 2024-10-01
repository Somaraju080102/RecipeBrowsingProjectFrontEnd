import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "./RecipeUserContext";

export function RecipeSignup() {
    const navigate = useNavigate();
    const {handleEmail} =useContext(UserContext);
    const formik = useFormik({
        initialValues: {
            userName: '',
            userEmail: '',
            userPassword: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:8080/signup', values);
                console.log("Response :" + response.data);
                if (response.data === "User SignUp Successfull") {
                    handleEmail(values.userEmail);
                    const aresponse=await axios.post('http://localhost:8080/authors', values);
                    navigate('/login');
                }
                // alert(JSON.stringify(values));
            } catch (error) {
                console.error(error);
                alert("Error Signing up");
            }
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Full name required"),
            userEmail: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            userPassword: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('userPassword'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjI3NjQ5ODQ5&ixlib=rb-1.2.1&q=80&w=1080')`
           , backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '30px',
                borderRadius: '10px',
                width: '400px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}>
                <header style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    marginBottom: '20px',
                }}>
                    RecipeBrowsing - Sign Up
                </header>

                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="userName"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            required
                        />
                        <small className="text-danger">{formik.errors.userName}</small>
                    </div>

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

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            required
                        />
                        <small className="text-danger">{formik.errors.confirmPassword}</small>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', marginTop: '20px' }}>
                        Sign Up
                    </button>

                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
