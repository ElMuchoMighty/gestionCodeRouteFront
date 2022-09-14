import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {
  private baseUrl = "http://localhost:7070/autoEcoles";
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl); 
  }
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public save(autoEcole:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,autoEcole);
  }
  public update(autoEcoles:any):Observable<any>{
    return this.httpClient.put(this.baseUrl,autoEcoles);
  }
  public get(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); 
  }
}
