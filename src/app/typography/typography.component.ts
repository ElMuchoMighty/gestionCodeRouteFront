import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private coursService:CoursService, private router:Router) { }
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

  editCours(cours:Cours){
    //step 2
    localStorage.removeItem("editcoursId")
    //step 1
    localStorage.setItem("editcoursId",cours.idCours.toString());//permet de remplir les champs de modification
    //step 3
    //localhost:4200/editcours/3
    this.router.navigate(['/editcours',cours.idCours]);

  }
 

  delete (id:number){
    this.coursService.delete(id).subscribe(()=>{this.findAllCours()});
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
              }

