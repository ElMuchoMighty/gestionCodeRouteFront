import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/models/utilisateur';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  credentials = {username: '', password:''}
  constructor(private appService:AppService, private httpClient:HttpClient,private router:Router) { }
login(){
  this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/user")});
  return false;
}
  ngOnInit() {
  }
  inscrire(){
    
    this.router.navigate(['/inscription']);
    
  }

deco(){
    
  this.router.navigate(['/user']);
  
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

  authorities2(){
    if(this.appService.authenticated ==false){
      return false; 
    }else{
      return true
    }
  }
}
