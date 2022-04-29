import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import NoteService from "../service/NoteService";

const AddNote = () => {

  const [note,setNote] = useState({
    title : "",
    content : ""
  })

  const navigateToNoteList = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value;
    setNote({...note, [e.target.name] : value})
    // console.log(`${e.target.name} : ${e.target.value}`)
  }

  const handleClear = () =>{
    setNote({
      title : "",
      content : ""
    })
  }

  const saveNote = (e) => {
    e.preventDefault(); 
    NoteService.saveNote(note).then((response) => {
      console.log(response.data)
      navigateToNoteList("/noteList")
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div id="note-container">
      <div id="note-heading">
        Add a new Note
      </div>
      <div id="note-form">
        Enter the title
        <input name="title" value={note.title} onChange={(e) => handleChange(e)} type="text" id="note-title-input"/>
        <br />
        
        Enter the content
        <input type="text" name="content" value={note.content} onChange={(e) => handleChange(e)} id="note-content-input"/>

        <input type="submit" id="note-submit" onClick={saveNote}/>
        <button id="note-clear-details" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default AddNote
