import { useState } from "react";
import "./index.css"
import Sdata from "./Notes";




const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="flex justify-center items-center bg-white-300 w-full">
      <form
        onSubmit={submitNote}
        className="w-full max-w-md flex flex-col p-6 bg-black/40 text-black rounded-xl shadow-lg shadow-gray-500 my-6"
      >
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
          className="text-lg p-2 mb-4 rounded"
        />
        <textarea
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
          Add
        </button>
      </form>
    </div>
  );
};
export default CreateArea;