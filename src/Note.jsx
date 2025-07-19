
const Note = ({ title, content, id, ondelete }) => {
  const deleteNote = () => {
    ondelete(id);
  };

  return (
   <div className="w-[90%] sm:w-3/5 md:w-2/5 lg:w-1/4 rounded-2xl border border-gray-200 shadow-xl shadow-emerald-300 bg-white p-6 m-4 transition-transform hover:scale-[1.02]">
  <h2 className="text-2xl font-bold text-emerald-600 mb-2 tracking-wide">{title}</h2>
  <p className="text-blue-700 mb-4">{content}</p>
  <button
    onClick={deleteNote}
    className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
  >
    Delete
  </button>
</div>
  );
};

export default Note;
