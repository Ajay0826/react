import Header from "./components/Header";
import MainCom from "./components/MainCom";
import "./components/Chef.css";

export default function App() {
  return (
    <div className="container">
      <Header />{" "}
      {/*  //  the header of the page
       */}{" "}
      <MainCom /> {/*  // main container of the page */}
    </div>
  );
}
