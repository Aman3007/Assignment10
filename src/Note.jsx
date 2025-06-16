import "./index.css"
const Note=(props)=>{
const deleteNote=()=>{
props.ondelete(props.id)
}

    return(<>
    <div className="Note">
    <h2>{props.title}</h2>
         <p>{props.content}</p>
         <button className="delete" onClick={deleteNote}>Delete</button>
    </div>
     
    </>)
}
export default Note;