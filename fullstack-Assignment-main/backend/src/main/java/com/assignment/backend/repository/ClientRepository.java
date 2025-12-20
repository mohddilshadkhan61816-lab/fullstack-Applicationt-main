package com.assignment.backend.repository;

import com.assignment.backend.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClientRepository extends MongoRepository<Client, String> {
}