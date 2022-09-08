import { HttpClient, HttpRequest } from "@angular/common/http";
import { Moniteur } from "app/models/moniteur";
import { Observable } from "rxjs";

export class MoniteurteurService {
    private baseUrl = "http://localhost:7070/utilisateurs";
  
  
    constructor(private httpClient:HttpClient) { }
  
    public findAll() : Observable<any>{
      return this.httpClient.get(this.baseUrl);
    }
  /*
    public save(utilisateur:any) : Observable<any>{
      return this.httpClient.post(this.baseUrl,utilisateur);
    }
    */
  
    public save(image:File, moniteur:Moniteur):Observable<any>{
      const formData = new FormData();
      formData.append("nom",moniteur.nomMoniteur)
      formData.append("prenom",moniteur.prenomMoniteur)
      formData.append("anneeMoniteur",moniteur.anneeMoniteur)
      formData.append("descriptionMoniteur",moniteur.descriptionMoniteur)
      formData.append("telephoneMoniteur",moniteur.telephoneMoniteur)
      formData.append("emailMoniteur",moniteur.emailMoniteur)
     // formData.append("autoEcole",moniteur.autoEcole)
      formData.append("image",image)
      
      const requete = new HttpRequest("POST", this.baseUrl,formData,{reportProgress:true,responseType:"text"})
      return this.httpClient.request(requete)
      }
  
    public delete(id:number) : Observable<any>{
      return this.httpClient.delete(this.baseUrl+"/"+id);
    }
  }
  