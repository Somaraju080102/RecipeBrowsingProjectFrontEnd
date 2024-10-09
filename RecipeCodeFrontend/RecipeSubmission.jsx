import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { RecipeProfile } from "./RecipeProfile";
import { UserContext } from "./RecipeUserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RecipeHeader } from "./RecipeHeader";

export function RecipeSubmission() {
  const navigate = useNavigate();

  const context = useContext(UserContext);

  const { userEmail, hadleEmail } = context || {
    userEmail: null,
    hadleEmail: () => {},
  };

  const { user, handleLogout } = context || {
    user: null,
    handleLogout: () => {},
  }; // Default values

  const { handleRecipeId } = useContext(UserContext);

  // User state to track if the user is logged in
  // const [user, setUser] = useState(null);

  // // Handle login (this is just a mock, you'd implement actual login logic)
  // const handleLogin = (username) => {
  //     setUser({ name: username }); // Store user info when logged in
  // };

  // // Handle logout
  // const handleLogout = () => {
  //     setUser(null); // Clear user info when logged out
  // };

  // Formik setup for form handling and validation
  const formik = useFormik({
    initialValues: {
      recipeTitle: "",
      recipeType: "",
      recipeTime: "",
      recipeDifficulty: "",
      recipeIngredients: [""],
      recipeInstrucions: "",
      recipeAuthor: "",
      recipeAuthorEmail: userEmail ? userEmail.email : null,
    },
    validationSchema: Yup.object({
      recipeTitle: Yup.string().required("Recipe Title is required"),
      recipeType: Yup.string().required("Recipe Type is required"),
      recipeTime: Yup.number()
        .required("Recipe Time is required")
        .min(1, "Time must be more than 0"),
      recipeDifficulty: Yup.string().required("Recipe Difficulty is required"),
      recipeIngredients: Yup.array()
        .of(Yup.string().required("Ingredient cannot be empty"))
        .min(1, "At least one ingredient is required"),
      recipeInstrucions: Yup.string().required(
        "Recipe Instructions are required"
      ),
      recipeAuthor: Yup.string().required("Recipe Author is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/recipes",
          values
        );
        console.log(values);
        console.log("Saving Recipe info" + response.data);
        handleRecipeId(response.data);
        navigate(`/myrecipes`);
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Function to add a new ingredient field
  function handleAddIngredient() {
    formik.setFieldValue("recipeIngredients", [
      ...formik.values.recipeIngredients,
      "",
    ]);
  }

  // Function to remove the last ingredient field
  function handleRemoveIngredient() {
    const newIngredients = [...formik.values.recipeIngredients];
    if (newIngredients.length > 1) {
      // Ensure at least one ingredient remains
      newIngredients.pop();
      formik.setFieldValue("recipeIngredients", newIngredients);
    }
  }

  // Handle ingredient change for each input field
  function handleIngredientChange(index, value) {
    const newIngredients = [...formik.values.recipeIngredients];
    newIngredients[index] = value;
    formik.setFieldValue("recipeIngredients", newIngredients);
  }

  return (
    <div>
      {/* <header className="d-flex justify-content-around bg-black p-3">
               <Link to={"/"}> <button className="btn btn-primary">
                    <span className="bi bi-house"></span> Home
                </button></Link>
             <Link to={"/recipes"}>   <button className="btn btn-primary">
                    <span className="bi bi-plus-circle"></span> Add Recipe
                </button></Link>
                <button className="btn btn-primary">
                    <span className="bi bi-search"></span> Browse Recipe
                </button>
               <Link to={"/myrecipes"}> <button className="btn btn-primary">
                    <span className="bi bi-journal"></span> My Recipes
                </button></Link>
                <button className="btn btn-primary">
                    <RecipeProfile /> {/* The profile dropdown, you can modify it based on user status */}

      <RecipeHeader></RecipeHeader>
      {/* Recipe Submission Form */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center bg-light">Add Your Favourite Recipe</h1>
          <dl>
            {/* Recipe Title */}
            <dt>Recipe Title:</dt>
            <dd>
              <input
                type="text"
                name="recipeTitle"
                onChange={formik.handleChange}
                value={formik.values.recipeTitle}
                className="form-control"
                placeholder="Enter Recipe Name"
              />
            </dd>
            <dd className="text-bg-danger">{formik.errors.recipeTitle}</dd>

            {/* Recipe Type */}
            <dt>Recipe Type:</dt>
            <dd>
              <select
                className="form-select"
                onChange={formik.handleChange}
                value={formik.values.recipeType}
                name="recipeType"
                aria-label="Select a type"
              >
                <option value="">Select Type</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="both">Both</option>
              </select>
            </dd>
            <dd className="text-bg-danger">{formik.errors.recipeType}</dd>

            {/* Prep Time */}
            <dt>Prep Time (Minutes):</dt>
            <dd>
              <input
                type="number"
                name="recipeTime"
                value={formik.values.recipeTime}
                onChange={formik.handleChange}
                className="form-control"
                placeholder="Enter Prep Time"
              />
            </dd>
            <dd className="text-bg-danger">{formik.errors.recipeTime}</dd>

            {/* Difficulty */}
            <dt>Difficulty:</dt>
            <dd>
              <select
                className="form-select"
                value={formik.values.recipeDifficulty}
                onChange={formik.handleChange}
                name="recipeDifficulty"
                aria-label="Select Difficulty"
              >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </dd>
            <dd className="text-bg-danger">{formik.errors.recipeDifficulty}</dd>

            {/* Ingredients */}
            <dt>Ingredients:</dt>
            <dd>
              <div className="d-flex " style={{ maxHeight: "200px" }}>
                {formik.values.recipeIngredients.map((ingredient, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-control mb-2"
                    onChange={(e) =>
                      handleIngredientChange(index, e.target.value)
                    }
                    value={ingredient}
                    placeholder="Enter Ingredient"
                  />
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddIngredient();
                }}
                className="btn btn-primary"
              >
                Add Ingredient
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveIngredient();
                }}
                className="btn btn-primary"
              >
                Remove Ingredient
              </button>
            </dd>
            <dd className="text-bg-danger">
              {formik.errors.recipeIngredients}
            </dd>

            {/* Instructions */}
            <dt>Instructions:</dt>
            <dd>
              <textarea
                className="form-control"
                value={formik.values.recipeInstrucions}
                onChange={formik.handleChange}
                name="recipeInstrucions"
                rows="5"
                placeholder="Enter Instructions"
              />
            </dd>
            <dd className="text-bg-danger">
              {formik.errors.recipeInstrucions}
            </dd>

            {/* Recipe Author */}
            <dt>Recipe Author:</dt>
            <dd>
              <input
                type="text"
                name="recipeAuthor"
                value={user ? user.name : ""}
                onChange={formik.handleChange}
                className="form-control"
                placeholder="Enter Recipe Author's Name"
              />
            </dd>
            <dd className="text-bg-danger">{formik.errors.recipeAuthor}</dd>
          </dl>

          {/* Submit Button */}
          <center>
            <button type="submit" className="btn btn-danger">
              Add Recipe
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
