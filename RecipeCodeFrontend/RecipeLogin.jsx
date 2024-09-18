import { Link, Outlet, Route, Router } from "react-router-dom";
import { RecipeSignup } from "./RecipeSignUP";


export function RecipeLogin() {

    return(

      
        <div
        
        className="ms-5 container-fluid d-flex flex-column justify-content-center align-align-items-end"
        style={{ height: "100vh" }}
      >
        
       <Link to={"signup"}> <button className="btn btn-primary mb-3" style={{ width: "150px" }}>
          SignUp
        </button></Link>
        <Link to={"/login"}> <button className="btn btn-primary" style={{ width: "150px" }}>
          Login
        </button></Link>

        <div className="container-fluid d-flex justify-content-center align-content-center" >
<Outlet></Outlet>
        </div>

      </div>
      
    )
}