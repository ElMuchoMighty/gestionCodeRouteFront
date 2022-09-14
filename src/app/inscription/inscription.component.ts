import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Rapport } from 'app/models/rapport';
import { Utilisateur } from 'app/models/utilisateur';
import { RapportService } from 'app/services/rapport.service';
=======
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/models/utilisateur';
import { RoleService } from 'app/services/role.service';
>>>>>>> master
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  users!: any[]; 
  roles!: any[];
  utilisateur:Utilisateur=new Utilisateur();
  rapports!: any[];
  rapport:Rapport=new Rapport();

  constructor(private utilisateurService:UtilisateurService, private router:Router, private roleService:RoleService, private appService:AppService,private rapportService:RapportService,) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
    this.findAllRoles();
    this.findAllRapport();

  }

  findAllUtilisateur(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data;})
  }

  
  findAllRapport(){
    this.rapportService.findAll().subscribe(data => {this.rapports = data;})
  }
  
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateur();
        this.utilisateur = new Utilisateur();
      }
    )
  }

  saveRapport(){
        this.rapportService.save(this.rapport).subscribe(()=>{this.findAllRapport();this.rapport =new Rapport();
            })
    }



    supprimerRapport(id:number){
      this.rapportService.delete(id).subscribe(()=>{this.findAllRapport()});
    }




  supprimer(id:number){
    this.utilisateurService.delete(id).subscribe(()=>{this.findAllUtilisateur()});
  }

  editUser(user:Utilisateur){
    // Step 2
    localStorage.removeItem("edituserId");
    // Step 1
    localStorage.setItem("edituserId",user.idUtilisateur.toString());
    // Step 3
    // localhost:4200/editUser/3
    this.router.navigate(['/edituser',user.idUtilisateur]);
 
  }

  findAllRoles(){
    this.roleService.findAll().subscribe(data => {this.roles = data;})
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
