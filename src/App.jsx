import './App.css'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import Sdata from "./Notes";
import CreateArea from './CreateArea';
import { useState } from 'react';

const App=()=> {
const [notes , setnotes] =useState(Sdata)

const addNote=(note)=>{
setnotes((prev)=>{
 return [...prev,note]    
 
})
}

const delnote=(id)=>{
setnotes((prev)=>{
 return prev.filter((val,i)=>{
        return (i!=id)
 })   
 
})
}


 return(<>
<div className='container'>
 <Header></Header>
  
 <CreateArea onAdd={addNote}></CreateArea>
 {notes.map((val,i)=>{
return <Note title={val.title} content={val.content} key={i} id={i} ondelete={delnote}></Note>
 })
 }
<Footer></Footer>
</div>
 </>)
}

export default App
