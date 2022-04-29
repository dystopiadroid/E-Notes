import React from "react"
import {useNavigate} from "react-router-dom"

const Note = ({n, handleOnDelete}) => {

  const navigateToUpdateNote = useNavigate()

  const handleOnEdit = (e, id) => {
    e.preventDefault()
    navigateToUpdateNote(`updateNote/${id}`)
  }

  return (
    <>
      <tr key={n.id}>
        <td >{n.id}</td>
        <td >{n.title}</td>
        <td >{n.content}</td>
        <td>
          <a id="edit-note-button" onClick={(e, id) => handleOnEdit(e, n.id)}>Edit</a>
          <a id="delete-note-button" onClick={(id) => handleOnDelete(n.id)}>Delete</a>
        </td>
      </tr>

    </>
  );
}

export default Note
