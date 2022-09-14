import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseUrl = "http://localhost:7070//statistique/AdminR";
  private baseUrl1 = "http://localhost:7070/statistique/CandidatR";
  constructor(private httpClient:HttpClient) { }

  public NombreAdmin1() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public NombreCandidat1() : Observable<any>{
    return this.httpClient.get(this.baseUrl); 
  }

}
