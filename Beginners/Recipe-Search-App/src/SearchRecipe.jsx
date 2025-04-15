import React, { useEffect, useState } from 'react';

export default function SearchRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [filterRecipe, setFilterRecipe] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.recipes);
        setFilterRecipe(data.recipes);
      })
      .catch((err) => {
        setError(`Error Fetching Recipes ${err}`);
      });
  }, []);
  const searchRecipe = (e) => {
    if (value.trim() === '') {
      setRecipe(recipe);
      setFilterRecipe(recipe);
    }
    const inputValue = e.target.value;
    setValue(inputValue);
    const findRecipe = recipe.filter((info) =>
      info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterRecipe(findRecipe);
  };

  return (
    <div>
      <h2 className="title-box">Instant Recipe Finder App</h2>

      <input
        className="input-box sticky-bar"
        type="text"
        value={value}
        onChange={searchRecipe}
        placeholder="Enter Recipe Name..."
        autoFocus
      />
      <div className="recipe-wrapper">
        <ul className="align-left padding-cl default-font">
          <li>
            <span className="recipe-info">Cuisines: </span>Italian, Indian,
            Mexican, Chinese, and more.
          </li>
          <li>
            <span className="recipe-info">Meal Types: </span>
            Breakfast, Lunch, Dinner, Snacks, and Desserts.
          </li>
        </ul>
        {filterRecipe.length > 0 ? (
          <ul className="recipe-box default-font">
            {filterRecipe.map((recipe, index) => (
              <li key={index}>
                <h2 className="recipe-name">{recipe.name}</h2>
                <div className="flex-box">
                  <div className="img-box flex-inner">
                    <img src={recipe.image} />
                  </div>
                  <div className="recipe-content flex-inner">
                    <ul className="recipe-inner align-left">
                      <li>
                        <span className="recipe-info align-left">
                          Ingredients:
                        </span>
                        <ul className="ingredient-list">
                          {recipe.ingredients.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <span className="recipe-info align-left">
                          Prep Time:{' '}
                        </span>
                        {recipe.prepTimeMinutes} minutes
                      </li>
                      <li>
                        <span className="recipe-info align-left">
                          Cook Time:{' '}
                        </span>
                        {recipe.cookTimeMinutes} minutes
                      </li>
                      <li>
                        <span className="recipe-info align-left">Serves: </span>
                        {recipe.servings}
                      </li>
                      <li>
                        <span className="recipe-info align-left">
                          Difficulty:{' '}
                        </span>
                        {recipe.difficulty}
                      </li>
                      <li>
                        <span className="recipe-info align-left">
                          Cuisine:{' '}
                        </span>
                        {recipe.cuisine}
                      </li>
                      <li>
                        <span className="recipe-info align-left">
                          Calories per serving:{' '}
                        </span>
                        {recipe.caloriesPerServing}
                      </li>
                    </ul>
                    <p className="align-left">
                      <span className="recipe-info">Instructions: </span>
                      {recipe.instructions}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : error ? (
          <div className="padding-cl default-font red-color">{error}</div>
        ) : (
          <div className="padding-cl default-font">
            <p>No Recipes called {value}</p>
            <p>Search recipes by recipe name!!</p>
          </div>
        )}
      </div>
    </div>
  );
}
