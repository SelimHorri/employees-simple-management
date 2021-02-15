
import { EmployeeService } from './services/employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/dto/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public employees: Employee[];
  public employee: Employee;
  
  constructor(private employeeService: EmployeeService) {
    
  }
  
  ngOnInit() {
    this.findAll();
  }
  
  public findAll(): void {
    this.employeeService.findAll().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onOpenModal(employee: Employee, mode: string) : void {
    
    const button = document.createElement("button"); // type = 'submit' by default
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    
    if (mode === "add") {
      button.setAttribute("data-target", "#addEmployeeModal");
    }
    if (mode === "update") {
      this.employee = employee;
      button.setAttribute("data-target", "#updateEmployeeModal");
    }
    if (mode === "delete") {
      button.setAttribute("data-target", "#deleteEmployeeModal");
    }
    
    const mainContainer = document.getElementById("main-container");
    
    mainContainer.appendChild(button);
    button.click();
  }
  
  public onSaveEmployee(saveForm: NgForm) : void {
    
    this.employeeService.save(saveForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.findAll();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      }
    );
    
    document.getElementById("add-employee-form").click();
    saveForm.reset();
  }
  
  public onUpdateEmployee(employee: Employee) : void {
    
    this.employeeService.update(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.findAll();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      }
    );
    
    document.getElementById("update-employee-form").click();
  }
  
  
  
}
