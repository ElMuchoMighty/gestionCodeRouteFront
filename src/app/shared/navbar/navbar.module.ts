import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { Utilisateur } from 'app/models/utilisateur';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule implements OnInit{
    uti!: any[];
    
  utilisateur:Utilisateur=new Utilisateur();

    constructor(private utilisateurService:UtilisateurService) {}

    ngOnInit(): void {
        this.findAllUtilisateur();
    }

    findAllUtilisateur(){
        this.utilisateurService.findAll().subscribe(data => {this.uti = data;})

}
findOneCours(id:number){
    this.utilisateurService.findOne(id).subscribe(()=>{this.findAllUtilisateur()})
  }
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateur();
        this.utilisateur = new Utilisateur();
      }
    )
  }
  delete (id:number){
    this.utilisateurService.delete(id).subscribe(()=>{this.findAllUtilisateur()});
  }

}
