import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Autoecole } from "app/models/autoecole";
import { AutoecoleService } from "app/services/autoecole.service";

@Component({
  selector: 'app-editautoecole',
  templateUrl: './editautoecole.component.html',
  styleUrls: ['./editautoecole.component.scss']
})
export class EditAutoecoleComponent implements OnInit {
  editForm!: FormGroup;
  autoecole:Autoecole = new Autoecole();
  constructor(private router:Router,private autoecoleService:AutoecoleService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let userId = localStorage.getItem("editAutoecoleId");
    if(!userId){
      alert("Invalid Action!!!");
      this.router.navigate(['/autoecole']);
      return;
    }
    this.editForm = this.formBuilder.group({
   
      idAutoEcole:[],
      adresseAutoEcole: ['',Validators.required],
      emailAutoEcole:['',Validators.required],
      telephoneAutoEcole:['',Validators.required],
      enseigneAutoEcole:['',Validators.required],
      utilisateurAutoEcole:['',Validators.required],
      moniteurAutoEcole:['',Validators.required],
      rendezVousAutoEcole:['',Validators.required],
    })
    this.autoecoleService.get(+userId).
    subscribe(data => {this.editForm.setValue(data)});  
  }
 
  updateAutoecole(){
    var userJson = JSON.stringify(this.editForm.value);
    this.autoecoleService.update(userJson).
    subscribe(()=>{this.router.navigate(['/autoecole'])});
  }
 
}
