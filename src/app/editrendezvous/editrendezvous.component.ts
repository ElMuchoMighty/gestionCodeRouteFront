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
  rendezvous:Rendezvous = new Rendezvous();
  constructor(private router:Router,private rendezvousService:RendezvousService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let userId = localStorage.getItem("editRendezvousId");
    if(!userId){
      alert("Invalid Action!!!");
      this.router.navigate(['/rendezvous']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idRendezVous:[],
      dateRendezVous: ['',Validators.required],
      heureRendezVous:['',Validators.required],
      autoEcoleRendezVous:['',Validators.required],
      
    })
    this.rendezvousService.get(+userId).
    subscribe(data => {this.editForm.setValue(data)});  
  }
 
  updateRendezvous(){
    var userJson = JSON.stringify(this.editForm.value);
    this.rendezvousService.update(userJson).
    subscribe(()=>{this.router.navigate(['/rendezvous'])});
  }
 
}
