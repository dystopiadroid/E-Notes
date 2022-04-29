import axios from "axios";

const NOTE_API_BASE_URL = "http://localhost:8080/api/v1/notes";

class NoteService{

   saveNote(note){
      return axios.post(NOTE_API_BASE_URL, note)
   }

   getAllNotes(){
      return axios.get(NOTE_API_BASE_URL);
   }

   deleteNote(id){
      return axios.delete(`${NOTE_API_BASE_URL}/${id}`)
   }

   updateNote(note, id){
      return axios.put(`${NOTE_API_BASE_URL}/${id}`, note)
   }

   getNoteById(id){
      console.log("getNoteByID : " + id)
      return axios.get(`${NOTE_API_BASE_URL}/${id}`)
   }

}

export default new NoteService();
