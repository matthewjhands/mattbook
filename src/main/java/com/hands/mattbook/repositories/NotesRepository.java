package com.hands.mattbook.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hands.mattbook.models.Note;

@RepositoryRestResource
public interface NotesRepository extends PagingAndSortingRepository<Note, Integer>, CrudRepository<Note, Integer> {
}