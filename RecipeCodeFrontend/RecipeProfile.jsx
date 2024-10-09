import React, { useContext } from "react";
import { UserContext } from "./RecipeUserContext";

export function RecipeProfile() {
  const context = useContext(UserContext);

  const { user, handleLogout } = context || {
    user: null,
    handleLogout: () => {},
  }; // Default values
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="bi bi-person"> {user ? user.name : "Profile"}</span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {user ? (
          <>
            {console.log("hello")}
            <li>
              <span className="dropdown-item">Hello, {user.name}</span>
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a className="dropdown-item" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/signup">
                Sign Up
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
