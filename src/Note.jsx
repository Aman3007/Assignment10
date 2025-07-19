
const Note = ({ title, content, id, ondelete }) => {
  const deleteNote = () => {
    ondelete(id);
  };

  return (
    <div className="w-[90%] sm:w-3/5 md:w-2/5 lg:w-2/7  rounded-xl border border-black shadow-md mt-4 mb-2 p-4 ml-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="my-2">{content}</p>
      <button
        onClick={deleteNote}
        className="bg-red-500 text-white font-bold px-4 py-2 rounded shadow hover:bg-red-600 transition-all duration-300 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;