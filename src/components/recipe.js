import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./recipeCard";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("food");

  const ID = `${process.env.REACT_APP_API_ID}`;
  const KEY = `${process.env.REACT_APP_API_KEY}`;
  const API_URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${ID}&app_key=${KEY}`;

  const getRecipes = async () => {
    try {
      const res = await axios.get(API_URL);
      const data = await res.data;
      setRecipes(data.hits);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
    setSearch("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            name="seacrh"
            value={search}
            onChange={handleSearch}
            className="form-control"
            placeholder="Recipe Name...."
          />
          <button className="btn btn-outline-secondary" type="submit">
            SEARCH
          </button>
        </div>
      </form>
      {recipes.map((recipe) => {
        const { recipe: rec } = recipe;

        return (
          <RecipeCard
            title={rec.label}
            calories={rec.calories}
            image={rec.image}
            mealType={rec.mealType}
            ingredients={rec.ingredients}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Recipe;