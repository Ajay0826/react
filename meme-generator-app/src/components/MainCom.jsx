import "./Meme.css";
import Form from "./Form";
import React from "react";

export default function MainCom() {
  const [meme, setMeme] = React.useState({
    topText: "one does not simply",
    bottomText: "walk into mordor",
    imageUrl: "https://i.imgflip.com/s2zxn.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    console.log(value);
    return setMeme((memeobj) => ({
      ...memeobj,
      [name]: value,
    }));
  }
  function setImageUrl(setUrl) {
    setMeme((memeobj) => {
      return {
        ...memeobj,
        imageUrl: setUrl,
      };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())

      .then((data) => setAllMemes(data.data.memes));
  }, []);
  // console.log("array: ", allMemes);

  return (
    <main>
      <Form
        handleChange={handleChange}
        meme={meme}
        setImageUrl={setImageUrl}
        memeImage={allMemes}
      />
      <section className="meme-container">
        {/* <section className="heading-text"> */}

        <img src={meme.imageUrl} alt="meme-image" className="meme-image" />
        <h3 className="top-heading">{meme.topText} </h3>
        <h3 className="bottom-heading">{meme.bottomText}</h3>
        {/* </section> */}
      </section>
    </main>
  );
}
