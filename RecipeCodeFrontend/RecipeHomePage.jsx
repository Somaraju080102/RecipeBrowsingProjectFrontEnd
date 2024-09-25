import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeLogin } from "./RecipeLogin.jsx";
import { RecipeSignup } from "./RecipeSignUP.jsx";
import { RecipeLoginUp } from "./RecipeLoginUp.jsx";
import { RecipeSubmission } from "./RecipeSubmission.jsx";
import { RecipeProfile } from "./RecipeProfile.jsx";
import { UserProvider } from "./RecipeUserContext.jsx";


export function RecipHomePage() {
    return (
        <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjI3NjQ5ODQ5&ixlib=rb-1.2.1&q=80&w=1080')`,
                                backgroundSize: "cover",
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                color: "white",
                            }}
                        >
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontSize: "4rem",
                                    marginBottom: "20px",
                                }}
                            >
                                RecipeBrowsing
                            </h1>
                            <div
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    padding: "20px",
                                    borderRadius: "10px",
                                    width: "400px",
                                }}
                            >
                                <RecipeLogin />
                            </div>
                        </div>
                    }
                />
                <Route path="login" element={<RecipeLoginUp />} />
                <Route path="signup" element={<RecipeSignup />} />
                <Route path="/recipes" element={<RecipeSubmission />}
                />  
            </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}
