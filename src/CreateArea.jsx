import { useState } from "react";
import "./index.css"
import Sdata from "./Notes";




const CreateArea = (props) => {
    const [note, addnote] = useState({
        title: "",
        content: ""
    })

    const addingarea = (event) => {
        const { name, value } = event.target;
        
       
            addnote((prevvalue) => {
                return {
                    ...prevvalue,  // how to copy previous object data in new obj.
                    [name]: value,
                }
            })

        

    }

    const addarea = (event) => {
             if (!note.title || !note.content ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
        props.onAdd(note)
        addnote({
            title: "",
            content: ""
        })
        event.preventDefault();
       
    }

    return (<>
        <div className="createarea">
            <form onSubmit={addarea}>
                <input placeholder="title" name="title" value={note.title} onChange={addingarea} ></input>
                <textarea placeholder="content" name="content" value={note.content} onChange={addingarea} ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>

    </>)
}
export default CreateArea;