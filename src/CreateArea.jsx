import { useState,useEffect } from "react";
import "./index.css"
import Sdata from "./Notes";



const CreateArea = ({  onAdd, onEdit, editData, editingId, clearEdit  }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editingId !== null) {
      setNote(editData);
    }
  }, [editingId, editData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title ) {
      alert("Please fill title fields before submitting.");
      return;
    }
    else if (note.title.trim()=="") {
      alert("Empty title can not be added");
      return;
    }
    else if (note.content.trim()=="") {
      alert("Empty Content field can not be added");
      return;
    }
    else if ( !note.content) {
      alert("Please fill Content field efore adding.");
      return;
    }
    else{
      alert("successfully added..")
    }
    
    if (editingId !== null) {
      onEdit(editingId, note);
      clearEdit();
    } else {
      onAdd(note);
    }
    setNote({ title: "", content: "" });
  };

  return (
    <div className="flex justify-center items-center bg-white-300 w-full">
      <form
        onSubmit={submitNote}
        className="w-full max-w-md flex flex-col p-6 bg-black/40 text-black rounded-xl shadow-lg shadow-gray-500 my-6"
      >
        <input
        id="title" 
          required
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
          className="text-lg p-2 mb-4 rounded"
        />
        <textarea required
        id="content"
          placeholder="Content"
          name="content"
          value={note.content}
          onChange={handleChange}
          className="text-lg p-2 mb-4 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 font-bold rounded hover:bg-blue-600 transition"
        >
          {editingId !== null ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};
export default CreateArea;
