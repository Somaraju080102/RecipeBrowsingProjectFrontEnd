import { createContext, useState } from "react";
import { RecipeLoginUp } from "./RecipeLoginUp";
import { RecipeProfile } from "./RecipeProfile";

// Create a context to manage the user state
export const UserContext = createContext();

// UserProvider component
export function UserProvider({ children }) {

    const [user, setUser] = useState(null); // User state

    const [userEmail,setUserEmail]=useState(null);

    const [recipeId,setRecipeId]=useState(null);


    // Handle user login
    const handleLogin = (username) => {
        setUser({ name: username });
    };

    const handleEmail=(useremail)=>{
        setUserEmail({email:useremail});
    }

    const handleRecipeId=(recipeid)=>{
        setRecipeId({id:recipeid});
    }

    // Handle user logout
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout ,userEmail,handleEmail,recipeId,handleRecipeId}}>
            {children}
        </UserContext.Provider>
    );
}
