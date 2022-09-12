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
  
    public save(moniteur:any) : Observable<any>{
      return this.httpClient.post(this.baseUrl,moniteur);
    }
    
  /*
    public save(image:File, moniteur:Moniteur):Observable<any>{
      const formData = new FormData();
      formData.append("nom",moniteur.nomMoniteur)
      formData.append("prenom",moniteur.prenomMoniteur)
      formData.append("anneeMoniteur",moniteur.anneeMoniteur)
      formData.append("descriptionMoniteur",moniteur.descriptionMoniteur)
      //formData.append("telephoneMoniteur",moniteur.telephoneMoniteur)
      formData.append("emailMoniteur",moniteur.emailMoniteur)
     // formData.append("autoEcole",moniteur.autoEcole)
     // formData.append("image",image)
      
      const requete = new HttpRequest("POST", this.baseUrl,formData,{reportProgress:true,responseType:"text"})
      return this.httpClient.request(requete)
      }
      */
  
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
  