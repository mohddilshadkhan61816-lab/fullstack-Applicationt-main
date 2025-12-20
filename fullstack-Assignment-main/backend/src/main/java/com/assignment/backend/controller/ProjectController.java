package com.assignment.backend.controller;

import com.assignment.backend.model.Project;
import com.assignment.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
}