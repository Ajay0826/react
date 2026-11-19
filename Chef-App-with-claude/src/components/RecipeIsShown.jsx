// imported ai model is here
import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MarkDown from "react-markdown";

const mySecretKey = "AQ.Ab8RN6L3b088huBZG5fsxjIhpqUg0mg5Dyc1sO7Ah2Nys72j7g";
const ai = new GoogleGenerativeAI(mySecretKey);

export default function RecipeIsShown(prop) {
  const [recipe, setRecipe] = React.useState("the recipe is loading ");
  React.useEffect(() => {
    async function aiAnswer() {
      try {
        console.log("Sending prompt to Gemini... ");
        const model = ai.getGenerativeModel({ model: "gemini-3.5-flash-lite" });
        const result = await model.generateContent(
          `give a recipe with  available  ingredient in this list : ${prop.ingredienttoAI} , no more word then  200`,
        );

        const response = await result.response;
        console.log("AI Response: ");
        console.log(response.text());
        setRecipe(response.text());
      } catch (error) {
        console.log("The request failed. Error details");
        console.log(error);
        setRecipe("Failed to load recipe, please try again. ");
      }
    }

    aiAnswer();
  }, []);
  return (
    <>
      <section className="markdownRecipe-container">
        <h2>Claude recipe</h2>

        <MarkDown>{recipe}</MarkDown>
      </section>
    </>
  );
}
