package backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import backend.model.Employee;
import backend.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")

// The controllers are like pathes (Njia)
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees API
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
