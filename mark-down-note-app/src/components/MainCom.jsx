import React from "react";
import "./Note.css";
export default function MainCom() {
  const [note, setNote] = React.useState("first Note");
  const [newItem, setNewItem] = React.useState([]);

  function newNote(e) {
    const { value } = e.currentTarget;
    console.log(value);
    setNote(value);
  }

  function newListItem() {
    setNote(" ");

    return setNewItem((prev) => {
      return [...prev, note];
    });
  }

  function deleteListItem(indextoRemove) {
    setNewItem((prev) => {
      return prev.filter((_, index) => index !== indextoRemove);
    });
  }

  const item =
    newItem &&
    newItem?.map((item, index) => (
      <li key={index}>
        {item}{" "}
        <button
          className="list-item-remove-btn"
          onClick={() => {
            deleteListItem(index);
          }}
        >
          ❌
        </button>{" "}
      </li>
    ));

  return (
    <>
      <main>
        <div className="note-input">
          <label htmlFor="input-note-label" className="input-section">
            Note:
            <input
              type="text"
              placeholder="Enter Note"
              name="input-note"
              id="input-note"
              onChange={newNote}
              value={note}
            />
          </label>
          <button
            onClick={newListItem}
            class=" bg-amber-400 
            hover:bg-white-100 
            text-black-100
             hover:text-blue-300 "
          >
            Submit
          </button>
        </div>
        <h2>Notes</h2>
        <div className="note-list">
          <ul>
            <li>{note}</li>
            {item}
          </ul>
        </div>
      </main>
    </>
  );
}
