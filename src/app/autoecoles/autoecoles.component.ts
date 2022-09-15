import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Autoecole } from 'app/models/autoecole';
import { Moniteur } from 'app/models/moniteur';
import { Permisdeconduire } from 'app/models/permisdeconduire';
import { Rendezvous } from 'app/models/rendezvous';
import { AutoecoleService } from 'app/services/autoecole.service';
import { MoniteurService } from 'app/services/moniteur.service';
import { PermisService } from 'app/services/permisdeconduire.service';
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
  rendezvouss!:any[];
  permiss!:any[];
  moniteur : Moniteur = new Moniteur();
  autoecole : Autoecole = new Autoecole();
  rendezVous : Rendezvous = new Rendezvous();
  

  constructor(private moniteurService:MoniteurService,private autoecoleService:AutoecoleService,private rendezVousService:RendezvousService,private router:Router,private permisService:PermisService, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllAutoecole();
    this.findAllMoniteur();
    this.findAllRendezVous();
    this.findAllPermis();
  }

  // ********************************AUTO ECOLE

  findAllAutoecole(){
    this.autoecoleService.findAll().subscribe(data => {this.autoecoles = data;})
  }

  findOneAutoecole(id:number){
    this.autoecoleService.findOne(id).subscribe(()=>{this.findAllAutoecole()})
  }


  
  save() {
    this.autoecoleService.save(this.autoecole).subscribe(
      () => {
        this.findAllAutoecole();
        this.autoecole = new Autoecole();
      }
    )
  }
 

  deleteAutoecole(id:number){
    this.autoecoleService.delete(id).subscribe(()=>{this.findAllAutoecole()});
  }

  findAllMoniteur(){
    this.moniteurService.findAll().subscribe((data: any[]) => {this.moniteurs = data;});
  }
  /*findOneMoniteur(id:number){
    this.moniteurService.findOne(id).subscribe(()=>{this.findAllMoniteur()})
  }*/

  saveMoniteur() {
        this.moniteurService.save(this.moniteur).subscribe(
      () => {
        this.findAllMoniteur(); // MAJ de la liste des utilisateurs
        this.moniteur = new Moniteur(); // Vider le formulaire        
      }
    )
  }

  delete(id:number){
    this.moniteurService.delete(id).subscribe(()=>{this.findAllMoniteur()});
  }


  editMoniteur(moniteur:Moniteur){
      // Step 2
      localStorage.removeItem("editmoniteurId");
      // Step 1
      localStorage.setItem("editmoniteurId",moniteur.idMoniteur.toString());
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['/editmoniteur',moniteur.idMoniteur]);
   
    }




    findAllPermis(){
      this.permisService.findAll().subscribe(data => {this.permiss = data;})
    }


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
