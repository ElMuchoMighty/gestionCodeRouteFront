import { Component, OnInit } from '@angular/core';
import { AutoecoleService } from 'app/services/autoecole.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  autoecoles!: any[];


  place="Pau";
  constructor(private autoecoleService:AutoecoleService) { }

  ngOnInit() { 
    this.findAllAutoecole();
  }


  findAllAutoecole(){
    this.autoecoleService.findAll().subscribe(data => {this.autoecoles = data;})
  }

}