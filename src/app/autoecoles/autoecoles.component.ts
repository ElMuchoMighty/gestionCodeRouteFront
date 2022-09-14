import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  rendezvouss!:any[];
  permiss!:any[];
  moniteur : Moniteur = new Moniteur();
  autoecole : Autoecole = new Autoecole();
  rendezvous : Rendezvous = new Rendezvous();
  
  constructor(private moniteurService:MoniteurService,private autoecoleService:AutoecoleService,private rendezvousService:RendezvousService,private router:Router,private permisService:PermisService) { }

  ngOnInit(): void {
    this.findAllAutoecole();
    this.findAllMoniteur();
    this.findAllRendezvous();
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

  //***************************** MONITEUR **********************/




  findAllMoniteur(){
    this.moniteurService.findAll().subscribe((data: any[]) => {this.moniteurs = data;});
  }
  findOneMoniteur(id:number){
    this.moniteurService.findOne(id).subscribe(()=>{this.findAllMoniteur()})
  }

  saveMoniteur() {
        console.log(this.moniteur.permis);
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
      localStorage.removeItem("editMoniteurId");
      // Step 1
      localStorage.setItem("editMoniteurId",moniteur.idMoniteur.toString());
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['editMoniteur',moniteur.idMoniteur]);
   
    }




    findAllPermis(){
      this.permisService.findAll().subscribe(data => {this.permiss = data;})
    }


    //******************* RENDEZ VOUS ****************/







    findAllRendezvous(){
      this.rendezvousService.findAll().subscribe((data: any[]) => {this.rendezvouss = data;});
    }
    findOneRendezvous(id:number){
      this.rendezvousService.findOne(id).subscribe(()=>{this.findAllRendezvous()})
    }
    
    saveRendezvous() {
          this.rendezvousService.save(this.rendezvous).subscribe(
        () => {
          this.findAllRendezvous(); // MAJ de la liste des utilisateurs
          this.rendezvous = new Rendezvous(); // Vider le formulaire        
        }
      )
    }
   
  
    deleteRendezvous(id:number){
      this.rendezvousService.delete(id).subscribe(()=>{this.findAllRendezvous()});
    }
    //constructor(private utilisateurService:UtilisateurService, private router:Router) { }
    editRendezvous(rendezvous:Rendezvous){
        // Step 2
        localStorage.removeItem("editRendezvousId");
        // Step 1
        localStorage.setItem("editRendezvousId",rendezvous.idRendezVous.toString());
        // Step 3
        // localhost:4200/editUser/3
        this.router.navigate(['editRendezvousId',rendezvous.idRendezVous]);
     
      }

    contenus ="Vous pouvez consulter les rendez-vous les moniteurs et les auto-écoles";
    Titre="BIENVENUE A LA SESSION AUTO ECOLE :)"
}
