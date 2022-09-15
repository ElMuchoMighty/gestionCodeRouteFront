import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Rendezvous } from "app/models/rendezvous";
import { RendezvousService } from "app/services/rendezvous.service";


@Component({
  selector: 'app-editrendezvous',
  templateUrl: './editrendezvous.component.html',
  styleUrls: ['./editrendezvous.component.scss']
})
export class EditRendezvousComponent implements OnInit {
  editForm!: FormGroup;
  rendezVous:Rendezvous = new Rendezvous();
  constructor(private router:Router,private rendezVousService:RendezvousService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let rendezVousId = localStorage.getItem("editrendezvousId");
    if(!rendezVousId){
      alert("Invalid Action!!!");
      this.router.navigate(['/rendezVous']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idRendezVous:[],
      heureRendezVous: ['',Validators.required],
      dateRendezVous: ['',Validators.required]
    })
    this.rendezVousService.findOne(+rendezVousId).
    subscribe(data => {this.editForm.setValue(data)});  
    console.log("rendezvousid"+rendezVousId);
    
  }
 
  updateRendezvous(){
    var rendezVousJson = JSON.stringify(this.editForm.value);
    this.rendezVousService.updateRendezVous(rendezVousJson).
    subscribe(()=>{this.router.navigate(['/autoecoles'])});
    console.log(rendezVousJson);
  }
 
}
