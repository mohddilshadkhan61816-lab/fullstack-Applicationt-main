package com.assignment.backend.controller;

import com.assignment.backend.model.Contact;
import com.assignment.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}