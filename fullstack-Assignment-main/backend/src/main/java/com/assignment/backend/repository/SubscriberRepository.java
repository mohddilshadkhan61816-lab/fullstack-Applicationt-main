package com.assignment.backend.repository;

import com.assignment.backend.model.Subscriber;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubscriberRepository extends MongoRepository<Subscriber, String> {
}