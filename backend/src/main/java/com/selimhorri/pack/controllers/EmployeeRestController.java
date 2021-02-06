package com.selimhorri.pack.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.selimhorri.pack.models.entities.Employee;
import com.selimhorri.pack.services.EmployeeService;

@RestController
@RequestMapping(value = {"/app/employees"})
public class EmployeeRestController {
	
	private EmployeeService employeeService;
	
	@Autowired
	public EmployeeRestController(final EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	@GetMapping(value = {"", "/", "/*", "/all"})
	public ResponseEntity<List<Employee>> findAll() {
		return new ResponseEntity<>(this.employeeService.findAll(), HttpStatus.OK);
	}
	
	@GetMapping(value = {"/{employeeId}"})
	public ResponseEntity<Employee> findById(@PathVariable("employeeId") final Integer employeeId) {
		return new ResponseEntity<>(this.employeeService.findById(employeeId), HttpStatus.OK);
	}
	
	@PostMapping(value = {"", "/", "/save"})
	public ResponseEntity<Employee> save(@RequestBody final Employee employee) {
		return new ResponseEntity<>(this.employeeService.save(employee), HttpStatus.OK);
	}
	
	@PutMapping(value = {"", "/", "/update"})
	public ResponseEntity<Employee> update(@RequestBody final Employee employee) {
		return new ResponseEntity<>(this.employeeService.update(employee), HttpStatus.OK);
	}
	
	@DeleteMapping(value = {"", "/", "/delete/{employeeId}"})
	public ResponseEntity<?> deleteById(@PathVariable("employeeId") final Integer employeeId) {
		this.employeeService.deleteById(employeeId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
}










