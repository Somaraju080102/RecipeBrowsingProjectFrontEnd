import { useEffect, useState } from "react";
import { RecipeHeader } from "./RecipeHeader";
import axios from "axios";

export function RecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]); // For Veg, Non-Veg, Both
  const [selectedDifficulty, setSelectedDifficulty] = useState([]); // For difficulty levels
  const [selectedTime, setSelectedTime] = useState([]); // For time filters

  // Fetch all recipes initially or when filters change
  useEffect(() => {
    fetchFilteredRecipes();
  }, [searchTerm, selectedTypes, selectedDifficulty, selectedTime]);

  const fetchFilteredRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allRecipes", {
        params: {
          search: searchTerm,
          types: selectedTypes, // Axios automatically encodes arrays
          difficulty: selectedDifficulty,
          time: selectedTime,
        },
      });
      console.log(response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Handle checkbox changes for types, difficulty, and time
  const handleCheckboxChange = (e, filterType, setSelectedFilter) => {
    const { checked, value } = e.target;
    setSelectedFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div>
      {/* <RecipeHeader /> */}

      {/* Main section with search bar */}
      <div className="container mt-2">
        <center>
          <h1 className="text-danger text-bg-light">
            Browse Your Favourite Recipes
          </h1>
        </center>
        <div className="d-flex justify-content-center mt-4">
          <div className="input-group w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search-button"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Filters and results section */}
      <div className="row mt-4">
        <div className="col-2 bg-primary">
          {/* Sort By Type */}
          <h5 className="text-light">Sort By Type</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Veg"
                onChange={(e) =>
                  handleCheckboxChange(e, "types", setSelectedTypes)
                }
              />
              <label className="ms-2">Veg</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Non-Veg"
                onChange={(e) =>
                  handleCheckboxChange(e, "types", setSelectedTypes)
                }
              />
              <label className="ms-2">Non Veg</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Both"
                onChange={(e) =>
                  handleCheckboxChange(e, "types", setSelectedTypes)
                }
              />
              <label className="ms-2">Both</label>
            </li>
          </ul>

          {/* Sort By Difficulty */}
          <h5 className="text-light mt-3">Sort By Difficulty</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Easy"
                onChange={(e) =>
                  handleCheckboxChange(e, "difficulty", setSelectedDifficulty)
                }
              />
              <label className="ms-2">Easy</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Medium"
                onChange={(e) =>
                  handleCheckboxChange(e, "difficulty", setSelectedDifficulty)
                }
              />
              <label className="ms-2">Medium</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="Hard"
                onChange={(e) =>
                  handleCheckboxChange(e, "difficulty", setSelectedDifficulty)
                }
              />
              <label className="ms-2">Hard</label>
            </li>
          </ul>

          {/* Sort By Preparation Time */}
          <h5 className="text-light mt-3">Sort By Preparation Time</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <input
                type="checkbox"
                value="30"
                onChange={(e) =>
                  handleCheckboxChange(e, "time", setSelectedTime)
                }
              />
              <label className="ms-2">30 Min</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="60"
                onChange={(e) =>
                  handleCheckboxChange(e, "time", setSelectedTime)
                }
              />
              <label className="ms-2">60 Min</label>
            </li>
            <li className="list-group-item">
              <input
                type="checkbox"
                value="90"
                onChange={(e) =>
                  handleCheckboxChange(e, "time", setSelectedTime)
                }
              />
              <label className="ms-2">90 Min</label>
            </li>
          </ul>
        </div>

        {/* Results Section */}
        <div className="col-9 ms-4">
          <table className="table table-striped">
            <thead className="table table-primary">
              <tr>
                <th>S.No</th>
                <th>Recipe Title</th>
                <th>Recipe Type</th>
                <th>Recipe Time</th>
                <th>Recipe Difficulty</th>
                <th>Recipe Ingredients</th>
                <th>Recipe Instructions</th>
                <th>Recipe Author</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => (
                <tr key={recipe.recipeId}>
                  <td>{index + 1}</td>
                  <td>{recipe.recipeTitle}</td>
                  <td>{recipe.recipeType}</td>
                  <td>{recipe.recipeTime} mins</td>
                  <td>{recipe.recipeDifficulty}</td>
                  <td>{recipe.recipeIngredients}</td>
                  <td>{recipe.recipeInstructions}</td>
                  <td>{recipe.recipeAuthor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
