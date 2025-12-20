package com.assignment.backend.controller;

import com.assignment.backend.model.Client;
import com.assignment.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    @GetMapping
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }
}