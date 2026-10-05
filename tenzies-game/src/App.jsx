import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main className="flex flex-col items-center justify-around h-150 max-w-150 p-4  border  m-7 rounded-2xl bg-white  ">
      {gameWon && <Confetti />}
      <div>
        <h1 className="text-center text-4xl/8 font-bold  mb-3 ">Tenzies</h1>
        <p className="text-center text-wrap font-semibold text-xl m-3">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-5">{diceElements}</div>
      <button
        ref={buttonRef}
        className="border rounded-2xl p-3 min-w-20 bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 text-nowrap"
        onClick={rollDice}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
