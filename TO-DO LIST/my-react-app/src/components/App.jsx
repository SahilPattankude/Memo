import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];

  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  function addNote(newNote) {
    // console.log(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, id: Date.now() }];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => noteItem.id !== id);



    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            creator={noteItem.creator}
            title={noteItem.title}
            message={noteItem.message}
            tags={noteItem.tags}
            onDelete={deleteNote}

          />

        );
      })}
    </div>
  );
}
export default App;
