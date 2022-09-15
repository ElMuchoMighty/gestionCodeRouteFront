import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  stats(){
    
    this.router.navigate(['/statistique']);
    
  }
}
