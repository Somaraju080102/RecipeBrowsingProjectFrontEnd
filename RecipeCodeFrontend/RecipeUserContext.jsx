import { createContext, useState, useEffect } from "react";

// Create the UserContext
export const UserContext = createContext();

// UserProvider component to wrap the application
export function UserProvider({ children }) {
    // User, email, and recipe state with localStorage persistence
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [userEmail, setUserEmail] = useState(() => {
        const storedEmail = localStorage.getItem('userEmail');
        return storedEmail ? JSON.parse(storedEmail) : null;
    });

    const [recipeId, setRecipeId] = useState(() => {
        const storedRecipeId = localStorage.getItem('recipeId');
        return storedRecipeId ? JSON.parse(storedRecipeId) : null;
    });

    // Store user in localStorage when the state changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Store userEmail in localStorage when the state changes
    useEffect(() => {
        if (userEmail) {
            localStorage.setItem('userEmail', JSON.stringify(userEmail));
        } else {
            localStorage.removeItem('userEmail');
        }
    }, [userEmail]);

    // Store recipeId in localStorage when the state changes
    useEffect(() => {
        if (recipeId) {
            localStorage.setItem('recipeId', JSON.stringify(recipeId));
        } else {
            localStorage.removeItem('recipeId');
        }
    }, [recipeId]);

    // Handle user login
    const handleLogin = (username) => {
        setUser({ name: username });
    };

    // Handle user email
    const handleEmail = (useremail) => {
        setUserEmail({ email: useremail });
    };

    // Handle recipe ID
    const handleRecipeId = (recipeid) => {
        setRecipeId({ id: recipeid });
    };

    // Handle user logout
    const handleLogout = () => {
        setUser(null);
        setUserEmail(null);
        setRecipeId(null);
        localStorage.clear(); // Clear everything from localStorage
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout, userEmail, handleEmail, recipeId, handleRecipeId }}>
            {children}
        </UserContext.Provider>
    );
}
