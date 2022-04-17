import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ title, calories, image, mealType, ingredients }) => {
  const [hideRecipe, setHideRecipe] = useState(true)

  const handleShow = () => {
    hideRecipe ? setHideRecipe(false) : setHideRecipe(true)
  }

  const renderButton = (cl, text, event) => {
    return <button className={cl} onClick={event}>{text}</button>
  }

  console.log(`${process.env.REACT_APP_API_KEY}`)

  return (
    <div className="card text-center container" style={{ width: '20rem' }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {!hideRecipe && <ol>
          {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
          ))}
        </ol>}
        <p>{calories}</p>
        <h4>{mealType}</h4>
        {hideRecipe && renderButton("btn btn-warning", 'See Recipe', handleShow)}
        {!hideRecipe && renderButton("btn btn-warning", 'Hide Recipe', handleShow)}
      </div>
    </div>
  );
};

export default RecipeCard;