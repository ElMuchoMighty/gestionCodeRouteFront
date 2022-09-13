import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moniteur } from 'app/models/moniteur';
import { MoniteurService } from 'app/services/moniteur.service';


@Component({
  selector: 'app-autoecoles',
  templateUrl: './autoecoles.component.html',
  styleUrls: ['./autoecoles.component.css']
})
export class AutoecolesComponent implements OnInit {

  selectedFiles:FileList
  currentFileUpload:File
  users!: any[]; 
  moniteur : Moniteur = new Moniteur();
  
  constructor(private moniteurService:MoniteurService,private router:Router) { }

  ngOnInit(): void {
    this.findAllMoniteur();
  }
  

  findAllMoniteur(){
    this.moniteurService.findAll().subscribe((data: any[]) => {this.users = data;});
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

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
  editUser(user:Moniteur){
      // Step 2
      localStorage.removeItem("editUserId");
      // Step 1
      localStorage.setItem("editUserId",user.idMoniteur.toString());
      // Step 3
      // localhost:4200/editUser/3
      this.router.navigate(['editUser',user.idMoniteur]);
   
    }
  
}
