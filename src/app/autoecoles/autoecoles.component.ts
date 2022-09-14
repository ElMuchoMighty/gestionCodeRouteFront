import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Autoecole } from 'app/models/autoecole';
import { Moniteur } from 'app/models/moniteur';
import { Rendezvous } from 'app/models/rendezvous';
import { AutoecoleService } from 'app/services/autoecole.service';
import { MoniteurService } from 'app/services/moniteur.service';
import { RendezvousService } from 'app/services/rendezvous.service';


@Component({
  selector: 'app-autoecoles',
  templateUrl: './autoecoles.component.html',
  styleUrls: ['./autoecoles.component.css']
})
export class AutoecolesComponent implements OnInit {

  currentFileUpload:File
  moniteurs!: any[];
  autoecoles!: any[];
  appointment!:any[];
  moniteur : Moniteur = new Moniteur();
  autoecole : Autoecole = new Autoecole();
  rendezVous : Rendezvous = new Rendezvous();
  
  constructor(private moniteurService:MoniteurService,private autoecoleService:AutoecoleService,private rendezVousService:RendezvousService,private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    //this.findAllAutoecole();
    //this.findAllMoniteur();
    this.findAllRendezVous();
  }



  /*findAllAutoecole(){
    this.autoecoleService.findAll().subscribe((data: any[]) => {this.autoecoles = data;});
  }
  findOneAutoecole(id:number){
    this.autoecoleService.findOne(id).subscribe(()=>{this.findAllAutoecole()})
  }
  
  saveAutoecole() {
        this.autoecoleService.saveAutoecole(this.autoecole).subscribe(
      () => {
        this.findAllAutoecole(); // MAJ de la liste des utilisateurs
        this.autoecole = new Autoecole(); // Vider le formulaire        
      }
    )
  }
 

  deleteAutoecole(id:number){
    this.autoecoleService.delete(id).subscribe(()=>{this.findAllAutoecole()});
  }
  //constructor(private utilisateurService:UtilisateurService, private router:Router) { }
  editAutoecole(autoecole:Autoecole){
      // Step 2
      localStorage.removeItem("editAutoecoleId");
      // Step 1
      localStorage.setItem("editAutoecoleId",autoecole.idAutoEcole.toString());
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['editAutoecole',autoecole.idAutoEcole]);
   
    }
  findAllMoniteur(){
    this.moniteurService.findAll().subscribe((data: any[]) => {this.moniteurs = data;});
  }
  findOneMoniteur(id:number){
    this.moniteurService.findOne(id).subscribe(()=>{this.findAllMoniteur()})
  }
  save() {
        this.moniteurService.save(this.moniteur).subscribe(
      () => {
        this.findAllMoniteur(); // MAJ de la liste des utilisateurs
        this.moniteur = new Moniteur(); // Vider le formulaire        
      }
    )
  }
  
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      ()=>{
        this.findAllUtilisateur(); //update list
        this.utilisateur = new Utilisateur(); //vider formulaire
      }
    )
  }

  delete(id:number){
    this.moniteurService.delete(id).subscribe(()=>{this.findAllMoniteur()});
  }
  //constructor(private utilisateurService:UtilisateurService, private router:Router) { }
  editMoniteur(moniteur:Moniteur){
      // Step 2
      localStorage.removeItem("editMoniteurId");
      // Step 1
      localStorage.setItem("editMoniteurId",moniteur.idMoniteur.toString());
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['editMoniteur',moniteur.idMoniteur]);
   
    }*/





    //******************* RENDEZ VOUS ****************/

    findAllRendezVous(){
      this.rendezVousService.findAll().subscribe(data => {this.appointment = data;})
    }
    findOneRendezVous(id:number){
      this.rendezVousService.findOne(id).subscribe(()=>{this.findAllRendezVous()})
    }
    saveRendezVous(){
      this.rendezVousService.save(this.rendezVous).subscribe(
        () => {
          this.findAllRendezVous();
          this.rendezVous = new Rendezvous();
        }
      )
    }
    deleteRendezVous (id:number){
      this.rendezVousService.delete(id).subscribe(()=>{this.findAllRendezVous()});
    }

    editRendezVous(rendezVous:Rendezvous){
      // Step 2
      localStorage.removeItem("editrendezvousId");
      // Step 1
      localStorage.setItem("editrendezvousId",rendezVous.idRendezVous.toString());
  
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['/editrendezvous',rendezVous.idRendezVous]);
      
   
    }

    authenticated(){
      return this.appService.authenticated;//false
    }

    authorities(){
      if(this.appService.isAdministrateur ==true){
        return false; 
      }else{
        return true
      }
    }

    authorities2(){
      if(this.appService.authenticated ==false){
        return false; 
      }else{
        return true
      }
    }
}
