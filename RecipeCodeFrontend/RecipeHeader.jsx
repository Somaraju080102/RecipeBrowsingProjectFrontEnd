import { Link } from "react-router-dom";
import { RecipeProfile } from "./RecipeProfile";

export function RecipeHeader(){
    return(
        <div>
             <header className="d-flex justify-content-around bg-black p-3">
               <Link to={"/"}> <button className="btn btn-primary">
                    <span className="bi bi-house"></span> Home
                </button></Link>
             <Link to={"/recipes"}>   <button className="btn btn-primary">
                    <span className="bi bi-plus-circle"></span> Add Recipe
                </button></Link>
              <Link to={"/browse"}>  <button className="btn btn-primary">
                    <span className="bi bi-search"></span> Browse Recipe
                </button></Link>
             <Link to={"/myrecipes"}>   <button className="btn btn-primary">
                    <span className="bi bi-journal"></span> My Recipes
                </button></Link>
                <button className="btn btn-primary">
                    <RecipeProfile /> {/* The profile dropdown, you can modify it based on user status */}
                </button>
            </header>

        </div>
    )
}