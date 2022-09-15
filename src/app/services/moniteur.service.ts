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
      return this.httpClient.get(this.baseUrl); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
    }
    public findOne(id:number) : Observable<any>{
      return this.httpClient.get(this.baseUrl+"/"+id);
    }
    public save (moniteur:any):Observable<any>{
      return this.httpClient.post(this.baseUrl,moniteur);
    }
    public updateMoniteur(moniteur:any):Observable<any>{
      var moniteurParse = JSON.parse(moniteur);
      return this.httpClient.put(this.baseUrl+'/'+moniteurParse.idMoniteur,moniteurParse);
    }
    public delete(id:number):Observable<any>{
      return this.httpClient.delete(this.baseUrl+"/"+id); //http://localhost:7070/Cours/1
    }
  
  }
  