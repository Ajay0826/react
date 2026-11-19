import { useState } from "react";
import "./App.css";
import languages from "./languages";
import { randomWord } from "./languages";
// import confetti from "canvas-confetti";
import Confetti from "react-confetti";
let count = 0;
function App() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  console.log(randomWord);
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGamelost = wrongGuessCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameWon || isGamelost;

  const display = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className="  border-b-2 border-slate-400 shadow-xl bg-slate-700 p-2 mr-px  min-w-9 min-h-10 text-center  "
    >
      {guessedLetters.includes(letter) || isGameOver
        ? letter.toUpperCase()
        : ""}
    </span>
  ));
  const languagesChip = languages.map((lang, index) => {
    const lost = index < wrongGuessCount;
    return (
      <span
        key={lang.name}
        className=" flex justify-center items-center min-w-fit h-8 text-sm text-center rounded-sm"
        style={{
          opacity: lost ? 0.2 : 1,
          backgroundColor: lang.backgroundColor,
          color: lang.color,
          padding: "0 10px",
        }}
      >
        {lang.name}
      </span>
    );
  });

  function keyboardClick(value) {
    setGuessedLetters((item) => {
      return item.includes(value) ? item : [...item, value];
    });

    console.log(guessedLetters);
  }
  const keyboardElements = alphabets.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    return (
      <button
        onClick={() => {
          if (!isGameOver) {
            keyboardClick(letter);
          }
        }}
        key={index}
        className={`${isCorrect && "bg-green-500"} ${isWrong && "bg-red-500"} ${isGameOver && "opacity-40"} bg-amber-400  p-2 w-11 h-11 rounded-sm text-center font-bold text-slate-900`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  function newGame() {
    if (count == randomWord.length) {
      count = 0;
    } else {
      count++;
    }
    setCurrentWord(randomWord[count].word);
    setGuessedLetters([]);
  }

  function renderGameStatus() {
    if (!isGameOver) {
      return wrongGuessCount == 0 ? (
        <h2 className="text-black text-2xl">........</h2>
      ) : (
        <h2 className=" text-xl text-wrap max-w-[90%] text-center">{`GoodBye ${languages[wrongGuessCount - 1].fareWell} `}</h2>
      );
    }

    if (isGameWon) {
      // confetti({
      //   particleCount: 150,
      //   spread: 80,
      // });
      return (
        <>
          <Confetti />
          <h2 className=" text-2xl text-slate-50">You Win!</h2>
          <p className="text-center">🎉 Well done! 🎉</p>{" "}
        </>
      );
    } else {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly !</p>
        </>
      );
    }
  }
  return (
    <main className="flex flex-col items-center">
      <header className=" p-3 border-white rounded-t-2xl w-150 min-h-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 text-[#fffffd]">
          Assembly: Endgame
        </h1>
        <p className="text-md text-center max-w-100">
          Guess the word within 11 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section
        className={`${isGameWon ? "bg-green-500" : "bg-blue-300"} ${isGamelost ? "bg-red-500" : "bg-blue-300"}  mt-6 p-2  border-white rounded-xl w-140 h-25  flex flex-col justify-around items-center`}
        style={{
          backgroundColor:
            !isGameOver && wrongGuessCount != 0
              ? languages[wrongGuessCount - 1].backgroundColor
              : "",
          color:
            !isGameOver && wrongGuessCount != 0
              ? languages[wrongGuessCount - 1].color
              : "",
        }}
      >
        {renderGameStatus()}
      </section>
      <section className="m-8 p-2 w-110 h-25 flex flex-wrap justify-center gap-1">
        {languagesChip}
        <h4 className=" mt-4 text-center">
          {count == 0 ? "REACT word for test " : randomWord[count].hint}
        </h4>
      </section>
      <section className="mt-5 border-red-600 flex  min-w-full  justify-center ">
        {display}
      </section>
      <section className="flex flex-col items-center gap-15">
        <div className="mt-10 max-w-120 flex flex-wrap justify-center gap-1">
          {keyboardElements}
        </div>
        {isGameOver && (
          <button
            onClick={newGame}
            className="border-2 border-slate-200 rounded-sm bg-blue-400 text-black font-medium font-sans text-xl p-2 w-55 h-11"
          >
            New Game
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
