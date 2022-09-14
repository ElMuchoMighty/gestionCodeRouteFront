import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Moniteur } from "app/models/moniteur";
import { MoniteurService } from "app/services/moniteur.service";

@Component({
  selector: 'app-editmoniteur',
  templateUrl: './editmoniteur.component.html',
  styleUrls: ['./editmoniteur.component.scss']
})
export class EditMoniteurComponent implements OnInit {
  editForm!: FormGroup;
  moniteur:Moniteur = new Moniteur();
  constructor(private router:Router,private moniteurService:MoniteurService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let userId = localStorage.getItem("editMoniteurId");
    if(!userId){
      alert("Invalid Action!!!");
      this.router.navigate(['/moniteur']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idMoniteur:[],
      nomMoniteur: ['',Validators.required],
      prenomMoniteur:['',Validators.required],
      anneeMoniteur:['',Validators.required],
      descriptionMoniteur:['',Validators.required],
      telephoneMoniteur:['',Validators.required],
      emailMoniteur:['',Validators.required],
    })
    this.moniteurService.getMoniteur(+userId).
    subscribe(data => {this.editForm.setValue(data)});  
  }
 
  updateMoniteur(){
    var userJson = JSON.stringify(this.editForm.value);
    this.moniteurService.updateMoniteur(userJson).
    subscribe(()=>{this.router.navigate(['/moniteur'])});
  }
 
}
