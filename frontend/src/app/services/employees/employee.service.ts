import { environment } from './../../../environments/environment';
import { Employee } from './../../models/dto/employee';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private apiServerUrl: string = environment.apiServerUrl;
  
  constructor(private http: HttpClient) {
    
  }
  
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiServerUrl + "/employees");
  }
  
  public findById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiServerUrl + "/employees" + employeeId);
  }
  
  public save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiServerUrl + "/employees", employee);
  }
  
  public update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiServerUrl + "/employees", employee);
  }
  
  public deleteById(employeeId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + "/employees" + employeeId);
  }
  
  
  
}
