import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/models/utilisateur';
import { RoleService } from 'app/services/role.service';
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
  constructor(private utilisateurService:UtilisateurService, private router:Router, private roleService:RoleService, private appService:AppService) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
    this.findAllRoles();
  }

  findAllUtilisateur(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data;})
  }
  
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateur();
        this.utilisateur = new Utilisateur();
      }
    )
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
