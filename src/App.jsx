import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import Sdata from "./Notes";
import CreateArea from './CreateArea';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
const [editData, setEditData] = useState({ title: '', content: '' });

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };
const editNote = (id, updatedNote) => {
  setNotes((prevNotes) =>
    prevNotes.map((note, index) =>
      index === id ? updatedNote : note
    )
  );
};
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((_, i) => i !== id));
  };

 const editnote = (id) => {
  setEditingId(id);
  setEditData(notes[id]);
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
     <CreateArea
  onAdd={addNote}
  onEdit={editNote}
  editData={editData}
  editingId={editingId}
  clearEdit={() => setEditingId(null)} />
      <div className="flex flex-wrap gap-4.5">
        {notes.map((val, i) => (
          <Note
            key={i}
            id={i}
            title={val.title}
            content={val.content}
            ondelete={deleteNote}
            editdata={editnote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};





export default App
