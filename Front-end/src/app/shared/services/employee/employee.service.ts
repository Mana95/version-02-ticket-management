import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { error, log } from 'console';
import { EmployeeDetail } from './employee-detail.model';
import { Observable, map } from 'rxjs';
import {MyResponse} from '../myresponse';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //get all empoloyee
  url: string = environment.apiBaseUrl+'/Employee'




  list: EmployeeDetail[] = [];
  fromData : EmployeeDetail = new EmployeeDetail()
  constructor(private http: HttpClient){}
  


   refreshList(): Observable<any[]>{
    return this.http.get<MyResponse>(this.url).pipe(
      map(response => response.data)
    );
   }
 
   //get civilstatus

url_01: string = environment.apiBaseUrl+'/Employee/Civilstatus'
getCivilstatus():Observable<any[]>{
  return this.http.get<MyResponse>(this.url_01).pipe(
    map(response => response.data)
    
    
  );

  
  
  
}
  //get designation
  url_02: string = environment.apiBaseUrl+'/Employee/designation'
  getDesignation():Observable<any[]>{
    return this.http.get<MyResponse>(this.url_02).pipe(
      map(response => response.data)
      
      
    );
  }


  //get branch
  url_03: string = environment.apiBaseUrl+'/Employee/branch'
  getBranch():Observable<any[]>{
    return this.http.get<MyResponse>(this.url_03).pipe(
      map(response => response.data)
      
      
    );
  }


// url_04:string = environment.apiBaseUrl+'/Employee'
// createEmployee(employeeData: any): Observable<any> {
//   return this.http.post(this.url_04, employeeData);
// }


  //create employee
 url_04:string = environment.apiBaseUrl+'/Employee'

 postEmployee(){
  return this.http.post(this.url_04,this.fromData);
 }

 resetFrom(form:NgForm){
form.form.reset();
  
  this.fromData = new EmployeeDetail();
 }

 //update record

 url_05:string = environment.apiBaseUrl+'/Employee'

  upDateEmployee(){
  return this.http.put(this.url_05+'/'+this.fromData.id,this.fromData);
}
  

//delete employee
url_06:string = environment.apiBaseUrl+'/Employee'
deleteEmployee(id:number){
 
  
  return this.http.delete(this.url_06+'/'+id);
}

getManojAllEmployee() {
  return this.http.delete(this.url_06+'/'+2);
}
}
