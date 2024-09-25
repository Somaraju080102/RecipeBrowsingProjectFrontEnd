import { createContext, useState } from "react";
import { RecipeLoginUp } from "./RecipeLoginUp";
import { RecipeProfile } from "./RecipeProfile";

// Create a context to manage the user state
export const UserContext = createContext();

// UserProvider component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null); // User state

    // Handle user login
    const handleLogin = (username) => {
        setUser({ name: username });
    };

    // Handle user logout
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}
