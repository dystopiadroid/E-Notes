import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import NoteService from "../service/NoteService";

const UpdateNote = () => {

  const navigateToNoteList = useNavigate()
  const { id } = useParams()
  const [note, setNote] = useState({
    id : id,
    title : "",
    content : ""
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setNote({...note, [e.target.name] : value})
    // console.log(`${e.target.name} : ${e.target.value}`)
  }

  const submitUpdatedNote = () => {
    NoteService.updateNote(note, id).then((res) => {
      navigateToNoteList("/")
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleCancel = () => {
    navigateToNoteList("/")
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await NoteService.getNoteById(id)
        setNote(response.data)
        console.log(note)
      } catch(err){
        console.log(err)
      }
    } 

    fetchData()

  }, [])

  return (
    <>
      <div id="note-container">
          <div id="note-heading">
            Update Note
          </div>
          <div id="note-form">
            Enter the title
            <input name="title" value={note.title} onChange={(e) => handleChange(e)} type="text" id="note-title-input"/>
            <br />
            
            Enter the content
            <input type="text" name="content" value={note.content} onChange={(e) => handleChange(e)} id="note-content-input"/>

            <input type="submit" id="note-submit" onClick={submitUpdatedNote} value="Update"/>
            <button id="note-clear-details" onClick={handleCancel}>Cancel</button>
          </div>
        </div>

    </>
  );
}

export default UpdateNote
