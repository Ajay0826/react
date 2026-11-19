import "./Chef.css";
import ChefImage from "./images/download.png";
export default function Header() {
  return (
    <>
      <header>
        <div className="image-container">
          <img src={ChefImage} alt="chefImg" className="headerImage" />
        </div>
        <h2>Claude_Chef</h2>
      </header>
    </>
  );
}
