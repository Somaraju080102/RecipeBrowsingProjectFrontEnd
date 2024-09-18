import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeLogin } from "./RecipeLogin.jsx";
import { RecipeSignup } from "./RecipeSignUP.jsx";
import { RecipeLoginUp } from "./RecipeLoginUp.jsx";


export function RecipHomePage(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<RecipeLogin/>} >
                <Route path="login" element={<RecipeLoginUp></RecipeLoginUp>}/>
                <Route path="signup" element={<RecipeSignup></RecipeSignup>} ></Route> 
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}