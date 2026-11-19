import React from "react";
import "./Chef.css";
import Form from "./Form";
import GetRecipe from "./GetRecipe";
import RecipeIsShown from "./RecipeIsShown";

export default function MainCom() {
  const [ingredient, setIngredient] = React.useState([
    //this is the state for ingredient for the recipe
    // "potato",
    // "tomato",
    // "carrots",
    // "bread",
    // "spices",
  ]);
  const [recipeshow, setRecipeshow] = React.useState(false);
  const [getrecipebtn, setGetrecipebtn] = React.useState(false);

  function showRecipe() {
    if (ingredient.length >= 4) {
      return setRecipeshow((prev) => !prev);
    } else {
      console.log("not enough ingredient");
    }
  }
  function getrecipebtnfunction() {
    if (ingredient.length >= 5) {
      setGetrecipebtn((prev) => !prev);
    } else {
      console.log(" not enough item in list ");
    }
  }

  function addItemtoList(inputvalue) {
    // this is the function to add new item to the list
    console.log("inputvalue " + inputvalue);

    setIngredient((previtem) => {
      const currentList = previtem || [];
      return [...currentList, inputvalue];
    });
  }
  const listItem = ingredient.map((item, index) => {
    // this is the mapping of the array of the list or item to display them on the screen
    return <li key={index}> {item} </li>;
  });
  return (
    <>
      <main className="main-container">
        <Form
          addItemtoList={addItemtoList}
          getrecipebtnfun={getrecipebtnfunction}
        />{" "}
        {/*  ////// this is the function where it get value from the form into this file and use it to update the listItem   //////// */}
        <section className="ingredient-list-section">
          <h1>Ingredient: </h1>
          <ul className="ingredient-list">{listItem}</ul>
        </section>
        {getrecipebtn && (
          <GetRecipe showRecipe={showRecipe} ingredientlist={ingredient} />
        )}
        {recipeshow && <RecipeIsShown ingredienttoAI={ingredient} />}
      </main>
    </>
  );
}
