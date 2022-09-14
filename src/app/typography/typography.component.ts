import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Cours } from 'app/models/cours';
import { CoursService } from 'app/services/cours.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})

export class TypographyComponent implements OnInit {
  classes!: any[]; 
  cours:Cours=new Cours();
  constructor(private coursService:CoursService, private router:Router, private appService:AppService) { }
  ngOnInit(): void {
 
   // this.users = this.utilisateurService.users;
   this.findAllCours();
  }
  
  findAllCours(){
    this.coursService.findAll().subscribe(data => {this.classes = data;})
  }
  findOneCours(id:number){
    this.coursService.findOne(id).subscribe(()=>{this.findAllCours()})
  }
  save(){
    this.coursService.save(this.cours).subscribe(
      () => {
        this.findAllCours();
        this.cours = new Cours();
      }
    )
  }
  delete (id:number){
    this.coursService.delete(id).subscribe(()=>{this.findAllCours()});
  }
  editcours(cours:Cours){
    // Step 2
    localStorage.removeItem("editcoursId");
    // Step 1
    localStorage.setItem("editcoursId",cours.idCours.toString());

    // Step 3
    // localhost:4200/editUser/3
    console.log(cours.idCours);
    this.router.navigate(['/editcours',cours.idCours]);
    
 
  }


contenus ="Vous pouvez accéder à des cours gratuits ou payants";
Titre="BIENVENUE A LA SESSION COURS :)"

es(id:number) {
this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
}
es1() {
  this.Titre = 'Entrée et Sortie';
  }

rs(id:number) {
  this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
  }
  rs1() {
    this.Titre = 'Règles et signalisation';
    }
  
  c(id:number) {
    this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
    }
    c1() {
      this.Titre = 'Circulation';
      }

    cd(id:number) {
      this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
      }
      cd1() {
        this.Titre = 'Conducteur';
        }

      m(id:number) {
        this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
        }
        m1() {
          this.Titre = 'Mécaniques';
          }

        ese(id:number) {
          this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
          }
          ese1() {
            this.Titre = 'Equipements de sécurité';
            }

          ra(id:number) {
            this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
            }
            ra1() {
              this.Titre = 'Règlementation et accidents';
              }

            ec(id:number) {
              this.coursService.findOne(id).subscribe((data: Cours) => {this.contenus = data.contenuCours;console.log(this.contenus)});
              }
              ec1() {
                this.Titre = 'Eco-conduite';
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

