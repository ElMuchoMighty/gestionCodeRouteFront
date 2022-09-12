import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/models/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  users!: any[]; 
  utilisateur:Utilisateur=new Utilisateur();
  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
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


}
