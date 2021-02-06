package com.selimhorri.pack.services;

import java.util.List;

import com.selimhorri.pack.models.entities.Employee;

public interface EmployeeService {
	
	List<Employee> findAll();
	Employee findById(final Integer employeeId);
	Employee save(final Employee employee);
	Employee update(final Employee employee);
	void deleteById(final Integer employeeId);
	
}






