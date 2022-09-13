import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseUrl = "http://localhost:7070/statistique";
  constructor(private httpClient:HttpClient) { }

  public NombreAdmin1() : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/AdminR"); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }

  public NombreAdmin2() : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/CandidatR"); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }
}
