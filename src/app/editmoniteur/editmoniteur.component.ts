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
    let moniteurId = localStorage.getItem("editmoniteurId");
    if(!moniteurId){
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
      emailMoniteur:['',Validators.required]
    })
    this.moniteurService.findOne(+moniteurId).
    subscribe(data => {this.editForm.setValue(data)});  
  }
 
  updateMoniteur(){
    var moniteurJson = JSON.stringify(this.editForm.value);
    this.moniteurService.updateMoniteur(moniteurJson).
    subscribe(()=>{this.router.navigate(['/autoecoles'])});
  }
 
}
