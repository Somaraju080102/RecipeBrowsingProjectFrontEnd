import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { RecipeHeader } from './RecipeHeader';
import { UserContext } from './RecipeUserContext';
import { Link } from 'react-router-dom';

export function RecipeMyRecipes() {
    const context = useContext(UserContext);
    const { recipeId, handleRecipeId } = context;

    const [recipes, setRecipes] = useState([]);

    const handleDeleteRecipe = (recipeIdToDelete) => {
        console.log(recipeIdToDelete);

        const deleteRecipe = async () => {
            try {
                await axios.delete(`http://localhost:8080/deleterecipe/${recipeIdToDelete}`);
                // Filter out the deleted recipe from the state
                setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.recipeId !== recipeIdToDelete));
            } catch (error) {
                console.error('Error deleting recipe:', error);
            }
        };

        deleteRecipe();
    };

    useEffect(() => {
        if (recipeId) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/myrecipes/${recipeId.id}`);
                    setRecipes(response.data);
                } catch (error) {
                    console.error('Error fetching recipes:', error);
                }
            };
            fetchData();
        }
    }, [recipeId]);

    const handleLogoutClick = () => {
        setRecipes([]); // Clear recipes on logout
        handleRecipeId(null); // Optionally clear recipeId
    };

    return (
        <div>
            <RecipeHeader />
            <div className="container mt-5">
                <h2 className="text-center text-dark">My Recipes</h2>
                {recipeId ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Recipe Title</th>
                                <th>Recipe Type</th>
                                <th>Recipe Time</th>
                                <th>Recipe Difficulty</th>
                                <th>Recipe Ingredients</th>
                                <th>Recipe Instructions</th>
                                <th>Recipe Author</th>
                                <th>Recipe Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe, index) => (
                                <tr key={recipe.recipeId}>
                                    <td>{index + 1}</td>
                                    <td>{recipe.recipeTitle}</td>
                                    <td>{recipe.recipeType}</td>
                                    <td>{recipe.recipeTime} minutes</td>
                                    <td>{recipe.recipeDifficulty}</td>
                                    <td>{recipe.recipeIngredients}</td>
                                    <td>{recipe.recipeInstrucions}</td>
                                    <td>{recipe.recipeAuthor}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleDeleteRecipe(recipe.recipeId)} 
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No user logged in or no recipes to display.</p>
                )}
                {<Link to="/login"> 
                    <button className="btn btn-primary">
                        Login
                    </button> 
                </Link>}
            </div>
        </div>
    );
}