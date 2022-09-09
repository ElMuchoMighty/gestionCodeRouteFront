import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Reponse } from 'app/models/reponse';
import { Test } from 'app/models/test';
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
reponses!:any[];
reponse:Reponse=new Reponse;
test:Test= new Test;
selectedFiles:FileList;
currentFileUpload:File;
  constructor(private testService:TestService,private reponseService:ReponseService) { }

  ngOnInit() {
    this.findAllTest();
    this.findAllReponse();
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

  delete(id:number){
    this.testService.delete(id).subscribe(()=>{this.findAllTest()});
  }

}
