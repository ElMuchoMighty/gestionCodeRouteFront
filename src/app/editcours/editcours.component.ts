import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cours } from 'app/models/cours';
import { CoursService } from 'app/services/cours.service';

@Component({
  selector: 'app-editcours',
  templateUrl: './editcours.component.html',
  styleUrls: ['./editcours.component.scss']
})
export class EditcoursComponent implements OnInit {
  editForm!: FormGroup;
  cours:Cours = new Cours();
  constructor(private router:Router,private coursService:CoursService,
    private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    let coursId = localStorage.getItem("editcoursId");
    if(!coursId){
      alert("Invalid Action!!!");
      this.router.navigate(['/cours']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idCours:[],
      nbrHeuresCours: ['',Validators.required],
      contenuCours: ['',Validators.required],
      complexiteCours: ['',Validators.required],
      thematiqueCours: ['',Validators.required],
      formatCours: ['',Validators.required]
      
    })
    this.coursService.findOne(+coursId).
    subscribe(data => {this.editForm.setValue(data)});  
    
  }
 
  updateCours(){
    var coursJson = JSON.stringify(this.editForm.value);
    this.coursService.updateCours(coursJson).
    subscribe(()=>{this.router.navigate(['/typography'])});
    console.log(coursJson);

  }
}