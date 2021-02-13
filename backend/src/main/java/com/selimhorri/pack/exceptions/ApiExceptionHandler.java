package com.selimhorri.pack.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.selimhorri.pack.exceptions.customs.EmployeeNotFoundException;
import com.selimhorri.pack.exceptions.payloads.ExceptionMsg;

@RestControllerAdvice
public class ApiExceptionHandler {
	
	@ExceptionHandler(
		EmployeeNotFoundException.class
	)
	public ResponseEntity<Object> handleEmployeeNotFoundException(final EmployeeNotFoundException exception) {
		
		final HttpStatus badRequest = HttpStatus.BAD_REQUEST;
		final ExceptionMsg exceptionMsg = new ExceptionMsg(exception.getMessage(), badRequest, LocalDateTime.now());
		// final ExceptionMsg exceptionMsg = new ExceptionMsg(exception.getMessage(), exception, badRequest, LocalDateTime.now());
		
		System.err.println(exceptionMsg);
		
		return new ResponseEntity<>(exceptionMsg, badRequest);
	}
	
	
	
}









