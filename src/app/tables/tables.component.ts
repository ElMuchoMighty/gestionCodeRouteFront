import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { ExamenBlanc } from 'app/models/examen-blanc';
import { ExamenFinal } from 'app/models/examen-final';
import { Reponse } from 'app/models/reponse';
import { Test } from 'app/models/test';
import { ExamenBlancService } from 'app/services/examenblanc.service';
import { ExamenFinalService } from 'app/services/examenfinal.service';
import { ReponseService } from 'app/services/reponse.service';
import { TestService } from 'app/services/test.service';


import { data } from 'jquery';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
tests!:any[];
tests2!:any[];
reponses!:any[];
examenBlancs!:any[];
examenFinals!:any[];
reponse:Reponse=new Reponse;
test:Test= new Test;
examenBlanc:ExamenBlanc = new ExamenBlanc;
examenFinal:ExamenFinal = new ExamenFinal;
selectedFiles:FileList;
currentFileUpload:File;
score=0;
idRef=0;
idRefFinal=0;
scoreF=0;
  constructor(private testService:TestService,private reponseService:ReponseService,private examenBlancService:ExamenBlancService,private examenFinalService:ExamenFinalService, private appService:AppService) { }

  ngOnInit() {
    this.findAllTest();
    this.findAllReponse();
    this.findAllExamenBlanc();
    this.findAllExamenFinal();
  }
findAllTest(){
    this.testService.findAll().subscribe(data => {this.tests = data})
}

findAllReponse(){
    this.reponseService.findAll().subscribe(data => {this.reponses = data})
}
selectFile(event:any){
    this.selectedFiles = event.target.files;
  }
save(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.testService.save(this.currentFileUpload,this.test).subscribe(
      ()=>{
        this.findAllTest(); 
        this.test = new Test(); 
        this.selectedFiles = undefined;
      }
    )
  }

saveReponse(){
  console.log("response="+this.reponse);
    this.reponseService.save(this.reponse).subscribe(()=>{this.findAllReponse();this.reponse =new Reponse();
        })
}

findAllExamenBlanc(){
  this.examenBlancService.findAll().subscribe(data => {this.examenBlancs = data})
}

saveExamenBlanc(){
  this.examenBlancService.save(this.examenBlanc).subscribe(()=>{this.findAllExamenBlanc();this.examenBlanc=new ExamenBlanc()})
}

findAllExamenFinal(){
  this.examenFinalService.findAll().subscribe(data => {this.examenFinals = data})
}

saveExamenFinal(){
this.examenFinalService.save(this.examenFinal).subscribe(()=>{this.findAllExamenFinal();this.examenFinal= new ExamenFinal()})
}

deleteExamenBlanc(id:number){
  this.examenBlancService.delete(id).subscribe(()=>{this.findAllExamenBlanc})
}

deleteExamenFinal(id:number){
  this.examenFinalService.delete(id).subscribe(()=>{this.findAllExamenFinal})
}

deleteReponse(id:number){
  this.reponseService.delete(id).subscribe(()=>{this.findAllReponse()});
}


  delete(id:number){
    this.testService.delete(id).subscribe(()=>{this.findAllTest()});
  }


  answer(id1:number,id2:number,score:number){
    if (id1==id2){
      this.score=score+1
    }else{
      this.score=score-1
    }
  }

  answerF(id1:number,id2:number,scoreF:number){
    if (id1==id2){
      this.scoreF=scoreF+1
    }else{
      this.scoreF=scoreF-1
    }
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

}
