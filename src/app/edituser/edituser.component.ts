import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/models/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  editForm!: FormGroup;
  utilisateur:Utilisateur = new Utilisateur();
  constructor(private router:Router,private utilisateurService:UtilisateurService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let userId = localStorage.getItem("edituserId");
    if(!userId){
      alert("Invalid Action!!!");
      this.router.navigate(['/utilisateur']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nomUtilisateur: ['',Validators.required],
      prenomUtilisateur:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      dateNaissanceUtilisateur:['',Validators.required],
      emailUtilisateur:['',Validators.required],
      telUtilisateur:['',Validators.required]
    })
    this.utilisateurService.findOne(+userId).
    subscribe(data => {this.editForm.setValue(data)});  
  }
 
  updateUtilisateur(){
    var userJson = JSON.stringify(this.editForm.value);
    this.utilisateurService.updateUtilisateur(userJson).
    subscribe(()=>{this.router.navigate(['/user'])});
  }

  
}
