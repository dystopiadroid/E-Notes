import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AddNote from './components/AddNote';
import Navbar from "./components/Navbar";
import NoteList from './components/NoteList';
import UpdateNote from './components/UpdateNote';

function App() {
  return (
     <>
        <BrowserRouter>
           <Navbar/> 
           <Routes>
               <Route path='/' element={<NoteList/>}></Route>
               <Route index element={<NoteList/>}></Route>
               <Route path='/noteList' element={<NoteList/>}></Route>

               <Route path='/addNote' element={<AddNote/>}></Route>

              <Route path="/updateNote/:id" element={<UpdateNote/>}></Route>
              <Route path="/noteList/updateNote/:id" element={<UpdateNote/>}></Route>
           </Routes>
        </BrowserRouter>
     </>
     );
}

export default App;
