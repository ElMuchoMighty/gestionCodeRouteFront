import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from 'app/models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
    private baseUrl ="http://localhost:7070/tests";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  
  public save(image:File,test:Test):Observable<any>{
    const formData=new FormData();
    formData.append('fileTest',image);
    formData.append('question',test.question);
    formData.append('codeBonneReponse',test.codeBonneReponse.toString());
    formData.append('timerRep',test.timerRep.toString());
    const requete = new HttpRequest('POST',this.baseUrl,formData,
    {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); 
  }

  
}
