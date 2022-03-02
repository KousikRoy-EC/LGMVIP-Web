import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="InnerCreate">
        <div style={{ display: "block" }}>
          <div>
            <CreateArea onAdd={addNote} />
          </div>
          <div>
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem}
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
