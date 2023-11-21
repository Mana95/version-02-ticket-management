import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ComonService {

  constructor(private http :HttpClient) { }

  getInventory(): Observable<any[]>{
    return this.http.get<any>(environment.apiBaseUrl+`/Inventory`)
   }

   saveInventory(data:any){
    return this.http.post<any>(environment.apiBaseUrl+`/Item`,data)
   }

   updateInventory(data) {
    return this.http.put<any>(environment.apiBaseUrl+`/Item`, {params:{id:data.id}})
}
}
