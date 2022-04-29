package com.bala.crud.controller;

import java.util.List;
import java.util.Optional;

import com.bala.crud.entity.Note;
import com.bala.crud.repository.NoteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class NoteController {

	@Autowired
	NoteRepository noteRepository;

	@GetMapping("/notes")
	public List<Note> getAllNotes(){
		return noteRepository.findAll();
	}

	@PostMapping("/notes")
	public Note createNote(@RequestBody Note note){
		return noteRepository.save(note);
	}

	@GetMapping("/notes/{id}")
	public Note getNoteById(@PathVariable(value = "id") long noteId){
		return noteRepository.findById(noteId).get();
	}

	@PutMapping("/notes/{id}")
	public Note updateNote(@PathVariable(value = "id") long noteId, 
												@RequestBody Note notedetails){
		Optional<Note> note = noteRepository.findById(noteId);

		if(note.isPresent()){
			note.get().setTitle(notedetails.getTitle());
			note.get().setContent(notedetails.getContent());
			noteRepository.save(note.get());
		}
		return note.get();
	}

	@DeleteMapping("/notes/{id}")
	public ResponseEntity<?> deleteNode(@PathVariable(value = "id") long noteId){
		Optional<Note> note = noteRepository.findById(noteId);	
		if(note.isPresent()){
			noteRepository.delete(note.get());
		}

		return ResponseEntity.ok().build();
	}
	
}















