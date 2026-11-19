import "./Chef.css";

export default function Form(prop) {
  function addIngredient(e) {
    //             this is the function action of the form submit  and send value to the addItemtoList function to add item to the list
    e.preventDefault();
    if (e.target.className == "ingredient-btn") {
      const form = new FormData(e.currentTarget);
      const value = form.get("ingredient");
      console.log(value + "  of the input ");
      prop.addItemtoList(value);
      prop.getrecipebtnfun();
    }
  }

  return (
    <>
      <form className="form-container" onClick={addIngredient}>
        <input
          type="text"
          className="ingredient-input"
          id="ingredient"
          name="ingredient"
          placeholder="eg. Potato"
        />
        <button type="submit" className="ingredient-btn">
          Add Ingredient
        </button>
      </form>
    </>
  );
}
