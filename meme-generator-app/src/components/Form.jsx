export default function Form(prop) {
  function getNewImage(e) {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100);
    const newMemeUrl = prop.memeImage?.[randomNumber].url;
    console.log(newMemeUrl);

    return prop.setImageUrl(newMemeUrl);
  }
  return (
    <>
      <form>
        <div className="input-section">
          <label htmlFor="top-text" className="input-section-label">
            Top Text
            <input
              type="text "
              name="topText"
              placeholder="enter top text"
              className="input-for-meme  top-text"
              onChange={prop.handleChange}
              value={prop.meme.topText}
            />
          </label>
          <label htmlFor="bottom-text" className="input-section-label">
            Bottom Text
            <input
              type="text"
              name="bottomText"
              placeholder="enter botttom text"
              className="input-for-meme  bottom-text"
              onChange={prop.handleChange}
              value={prop.meme.bottomText}
            />
          </label>
        </div>
        <button onClick={getNewImage} className="input-btn">
          Get a new meme image
        </button>
      </form>
    </>
  );
}
