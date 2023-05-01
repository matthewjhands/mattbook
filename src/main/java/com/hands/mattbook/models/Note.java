package com.hands.mattbook.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "notes")
@Entity
public class Note {

    @Id
    @GeneratedValue
    private int id;

    private String body;

    public Note(){
        super();
    }
    
    public Note(int id, String body) {
        this.id = id;
        this.body = body;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getbody() {
        return body;
    }

    public void setbody(String body) {
        this.body = body;
    }

    

}
