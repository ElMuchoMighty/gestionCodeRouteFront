import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = "http://localhost:7070/rendezVous";
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public save (rendezVous:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,rendezVous);
  }
  public updateRendezVous(rendezVous:any):Observable<any>{
    var rendezVousParse = JSON.parse(rendezVous);
    return this.httpClient.put(this.baseUrl+'/'+rendezVousParse.idRendezVous,rendezVousParse);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); //http://localhost:7070/Cours/1
  }
}
