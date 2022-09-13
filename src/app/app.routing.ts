import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { EditcoursComponent } from './editcours/editcours.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import path = require('path');
import { TypographyComponent } from './typography/typography.component';
import { UserComponent } from './user/user.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EdituserComponent } from './edituser/edituser.component';


const routes: Routes =[

  {
    path: 'cours', // localhost:4200/utilisateur
    component : EditcoursComponent
  },{
    path: 'editcours/:id', // localhost:4200/editUser/4
    component: EditcoursComponent
  },{
    path: 'utilisateur', // localhost:4200/utilisateur
    component : InscriptionComponent
  },{
    path: 'edituser/:id', // localhost:4200/editUser/4
    component: EdituserComponent
  },{
    path:'login',
    component : UserComponent
  },{
    path:'inscription',
    component : InscriptionComponent
  },{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
