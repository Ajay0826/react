import "./Meme.css";
import LogoImage from "./images/images.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="image-container ">
          <img src={LogoImage} alt="meme-image" className="logo-image" />
        </div>
        <h3>Meme-Genenrator</h3>
      </header>
    </>
  );
}
