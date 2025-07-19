import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import Sdata from "./Notes";
import CreateArea from './CreateArea';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((_, i) => i !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-wrap gap-4.5">
        {notes.map((val, i) => (
          <Note
            key={i}
            id={i}
            title={val.title}
            content={val.content}
            ondelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

