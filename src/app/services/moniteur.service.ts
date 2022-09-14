import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Moniteur } from "app/models/moniteur";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoniteurService {
    
    private baseUrl = "http://localhost:7070/moniteurs";
  
  
    constructor(private httpClient:HttpClient) { }
  
    public findAll() : Observable<any>{
      return this.httpClient.get(this.baseUrl);
    }
    public findOne(id:number) : Observable<any>{
      return this.httpClient.get(this.baseUrl+"/"+id);
    }
    public save(moniteur:any) : Observable<any>{
      return this.httpClient.post(this.baseUrl,moniteur);
    }
    public delete(id:number) : Observable<any>{
      return this.httpClient.delete(this.baseUrl+"/"+id);
    }
    public getMoniteur(id:number):Observable<any>{
      return this.httpClient.get(this.baseUrl+'/'+id);
    }
    public updateMoniteur(user:any):Observable<any>{
      var userParse = JSON.parse(user);
      return this.httpClient.put(this.baseUrl+'/'+userParse.idMoniteur,userParse);
    }
  
  }
  