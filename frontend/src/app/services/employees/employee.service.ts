import { Employee } from './../../models/dto/employee';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private apiServerUrl: string = "localhost:8080/app/api"; // need to add this in environment
  
  constructor(private http: HttpClient) {
    
  }
  
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>("localhost:8080/app/api/employees");
  }
  
  public findById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>("localhost:8080/app/api/employees" + employeeId);
  }
  
  public save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>("localhost:8080/app/api/employees", employee);
  }
  
  public update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>("localhost:8080/app/api/employees", employee);
  }
  
  public deleteById(employeeId: number): Observable<void> {
    return this.http.delete<void>("localhost:8080/app/api/employees" + employeeId);
  }
  
  
  
}
