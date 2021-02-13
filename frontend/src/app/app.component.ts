import { EmployeeService } from './services/employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/dto/employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public employees: Employee[];
  
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
    
    const mainContainer = document.getElementById("main-container");
    
    const button = document.createElement("button"); // type = 'submit' by default
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    
    if (mode === "add") {
      button.setAttribute("data-target", "#addEmployeeModal");
    }
    if (mode === "update") {
      button.setAttribute("data-target", "#updateEmployeeModal");
    }
    if (mode === "delete") {
      button.setAttribute("data-target", "#deleteEmployeeModal");
    }
    
    mainContainer.appendChild(button);
    button.click();
    
  }
  
  
  
}
