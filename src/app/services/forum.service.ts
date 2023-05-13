import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  httpOptions: any; 
  Options : any;
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+sessionStorage.getItem("token")
      })
      }
  }
  getForum():Observable<any>{
    return this.http.get("http://localhost:4500/forum",this.httpOptions)
  }
  getForumById(id:number):Observable<any>{




    return this.http.get("http://localhost:4500/forum/"+id)
    
    
    
    
    }
  
    postForum(obj:any):Observable<any>{
  
      return this.http.post("http://localhost:4500/forum/",obj,this.httpOptions)
  
    }
  public postquery(obj :any):Observable<any>{
  
  
  
  
    this.Options=new HttpHeaders({
    
    
    
    
    'Content-Type':'application.json',
    
    
    
    
    
    
    
    })
    
    
    
    
    
    
    
    return this.http.post("http://localhost:4500/forum",obj,this.Options);
    
    
    
    
    
    
    
    
    } public postSuggestion(obj :any):Observable<any>{
    
    
    
    
    
    
    
    const sugg=new HttpHeaders({
    
    
    
    
    
    
    
    'Content-Type':'application/json',
    
    
    
    
    
    
    
    });
    
    
    
    
    return this.http.put("http://localhost:4500/forum/"+obj.id,obj,{headers:sugg});
    
    
    
    
    
    
    
     }
    
   
  }