import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(' http://localhost:4500/nutrition');
  }
  getDetails(id:any): Observable<any> {
    return this.http.get(' http://localhost:4500/nutrition/'+id);
  }
  getDietPlans(): Observable<any>{
    return this.http.get(' http://localhost:4500/dietplans');
  }
}
