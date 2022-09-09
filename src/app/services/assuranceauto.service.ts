import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assuranceauto } from 'app/models/assuranceauto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = "http://localhost:7070/assuranceAutos";
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public save (assuranceauto:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,assuranceauto);
  }
  public update (assuranceauto:any):Observable<any>{
    return this.httpClient.put(this.baseUrl,assuranceauto);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); //http://localhost:7070/Cours/1
  }
}
