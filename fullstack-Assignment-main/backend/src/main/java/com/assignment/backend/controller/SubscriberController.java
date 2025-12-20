package com.assignment.backend.controller;

import com.assignment.backend.model.Subscriber;
import com.assignment.backend.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/subscribe")
public class SubscriberController {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @PostMapping
    public Subscriber subscribe(@RequestBody Subscriber subscriber) {
        return subscriberRepository.save(subscriber);
    }

    @GetMapping
    public List<Subscriber> getAllSubscribers() {
        return subscriberRepository.findAll();
    }
}