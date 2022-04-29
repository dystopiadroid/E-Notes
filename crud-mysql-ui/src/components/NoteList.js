import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import NoteService from "../service/NoteService";
import Note from "./Note";

const NoteList = () => {

  const navigateToAddNote = useNavigate();

  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchAllNotes = async () => {
      setLoading(true)
      try{
        const response = await NoteService.getAllNotes()
        setNote(response.data)
        console.log(response.data)
      } catch(err){
        console.log(err)
      }
      setLoading(false)
    }

    fetchAllNotes()

    }, [])

  const handleOnDelete = (id) => {
    NoteService.deleteNote(id).then((res) => {
      if(note){
        setNote((prev) => (
          prev.filter((note) => note.id != id)
        ))
      }
    }).catch((err) => {
      console.log(err)
    })
   }


  return (
    <>
      <div id="add-note-button-container">
        <button id="add-note-button" onClick={() => navigateToAddNote("/addNote")}>
        Add Note
        </button>
      </div>
      { !loading && (
      <div id="note-list-table-container">
        <table id="note-list-table">
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Content</td>
            <td>Actions</td>
          </tr>
          { note.map((n) => (
            <Note n={n} handleOnDelete={handleOnDelete} key={n.id}/>
          ))}
        </table>
      </div>
      )}
    </>
  );
}

export default NoteList
