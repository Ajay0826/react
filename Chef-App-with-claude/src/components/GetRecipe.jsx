export default function GetRecipe(prop) {
  return (
    <>
      <div className="getRecipe-container">
        <div className="summery-for-getRecipe">
          <h2>Get recipe from the claude </h2>
          <p>
            Find the best recipe form the claude ai just by giving your avialble
            ingredient
          </p>
        </div>
        <button className="getRecipe-btn" onClick={prop.showRecipe}>
          Get Recipe
        </button>
      </div>
    </>
  );
}
