import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { RecipeHeader } from './RecipeHeader';
import { UserContext } from './RecipeUserContext';

export function RecipeMyRecipes() {

    const context=useContext(UserContext);

    const [recipes, setRecipes] = useState([{}]);

    const { recipeId, handleRecipeId } = context || { recipeId: null, handleRecipeId: () => {} }; 

    console.log(recipeId);
    const value=recipeId?recipeId.id
    : null;

    console.log("Value: " + value);



    // Fetch data from backend API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/myrecipes/${value}`);
                console.log(value);
                console.log(response.data);
                setRecipes(response.data);
                console.log(recipes.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchData();
    }, []);

    // Handle delete action
    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete(`/recipes/${id}`);
    //         setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.recipeId !== id));
    //     } catch (error) {
    //         console.error('Error deleting recipe:', error);
    //     }
    // };

    return (
        <div>
            <RecipeHeader></RecipeHeader>
        { <div className="container mt-5">
            <h2 className='text-center text-dark'>My Recipes</h2>
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
                                <button className="btn btn-danger" >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> }
        </div>
    );
}
