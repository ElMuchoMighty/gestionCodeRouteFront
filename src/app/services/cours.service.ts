import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from 'app/models/cours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = "http://localhost:7070/cours";
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public save (cours:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,cours);
  }
  public updateCours(cours:any):Observable<any>{
    var coursParse = JSON.parse(cours);
    return this.httpClient.put(this.baseUrl+'/'+coursParse.idCours,coursParse);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); //http://localhost:7070/Cours/1
  }
}
