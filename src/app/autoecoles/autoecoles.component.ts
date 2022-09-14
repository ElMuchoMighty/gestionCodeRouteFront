import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  rendezvouss!:any[];
  moniteur : Moniteur = new Moniteur();
  autoecole : Autoecole = new Autoecole();
  rendezvous : Rendezvous = new Rendezvous();
  
  constructor(private moniteurService:MoniteurService,private autoecoleService:AutoecoleService,private rendezvousService:RendezvousService,private router:Router) { }

  ngOnInit(): void {
    this.findAllAutoecole();
    this.findAllMoniteur();
    this.findAllRendezvous();
  }




  // ********************************AUTO ECOLE




  findAllAutoecole(){
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




    //***************************** MONITEUR **********************/




  findAllMoniteur(){
    this.moniteurService.findAll().subscribe((data: any[]) => {this.moniteurs = data;});
  }
  findOneMoniteur(id:number){
    this.moniteurService.findOne(id).subscribe(()=>{this.findAllMoniteur()})
  }
/*
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
*/
  save() {
        this.moniteurService.save(this.moniteur).subscribe(
      () => {
        this.findAllMoniteur(); // MAJ de la liste des utilisateurs
        this.moniteur = new Moniteur(); // Vider le formulaire        
      }
    )
  }
  /*
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      ()=>{
        this.findAllUtilisateur(); //update list
        this.utilisateur = new Utilisateur(); //vider formulaire
      }
    )
  }*/

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
    
    es(id:number) {
      this.moniteurService.findOne(id).subscribe((data: Autoecole) => {this.contenus = data.enseigneAutoEcole;console.log(this.contenus)});
      }
      
      es1() {
        this.Titre = 'Auto-Ecoles';
        }
        rs(id:number) {
          this.moniteurService.findOne(id).subscribe((data: Autoecole) => {this.contenus = data.enseigneAutoEcole;console.log(this.contenus)});
          }
          rs1() {
            this.Titre = 'Ajouter un Rendez-vous';
            }
          
          c(id:number) {
            this.moniteurService.findOne(id).subscribe((data: Autoecole) => {this.contenus = data.enseigneAutoEcole;console.log(this.contenus)});
            }
            c1() {
              this.Titre = 'Ajouter un Moniteur';
              }
}
