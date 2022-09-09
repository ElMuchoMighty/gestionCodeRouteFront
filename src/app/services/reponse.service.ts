import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  private baseUrl ="http://localhost:7070/reponses";
  constructor(private httpClient:HttpClient) { }


  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  

  public save(reponse:any){
    return this.httpClient.post(this.baseUrl,reponse);
  }


  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); 
  }



}
