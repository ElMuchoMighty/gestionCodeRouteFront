<<<<<<< HEAD
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Moniteur } from "app/models/moniteur";
import { Observable } from "rxjs";
<<<<<<<< HEAD:src/app/services/moniteur.service.ts

@Injectable({
  providedIn: 'root'
})
export class MoniteurService {
    private baseUrl = "http://localhost:7070/moniteurs";
========
/*
export class MoniteurteurService {
    private baseUrl = "http://localhost:7070/utilisateurs";
>>>>>>>> master:src/app/services/moniteur.ts
  
  
    constructor(private httpClient:HttpClient) { }
  
    public findAll() : Observable<any>{
      return this.httpClient.get(this.baseUrl);
    }
<<<<<<<< HEAD:src/app/services/moniteur.service.ts
========
  
    public save(utilisateur:any) : Observable<any>{
      return this.httpClient.post(this.baseUrl,utilisateur);
    }
    
>>>>>>>> master:src/app/services/moniteur.ts
  
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
<<<<<<<< HEAD:src/app/services/moniteur.service.ts
    public getMoniteur(id:number):Observable<any>{
      return this.httpClient.get(this.baseUrl+'/'+id);
    }
    public updateMoniteur(user:any):Observable<any>{
      var userParse = JSON.parse(user);
      return this.httpClient.put(this.baseUrl+'/'+userParse.idMoniteur,userParse);
    }
========
>>>>>>>> master:src/app/services/moniteur.ts
  
  }
  */
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = "http://localhost:7070/moniteurs";
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl); // http:localhost:7070/utilisateurs: le verbe get => afficher la liste des utilisateurs
  }
  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.baseUrl+"/"+id);
  }
  public save (moniteurs:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,moniteurs);
  }
  public update (moniteurs:any):Observable<any>{
    return this.httpClient.put(this.baseUrl,moniteurs);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); //http://localhost:7070/Cours/1
  }
  
}
*/
>>>>>>> master
