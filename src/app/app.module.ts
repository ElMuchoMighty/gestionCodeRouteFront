import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MoniteurService } from './services/moniteur.service';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
<<<<<<< HEAD
import { EditUserComponent } from './edit-user/edit-user.component';
=======
import { TestService } from './services/test.service';
import { ReponseService } from './services/reponse.service';
import { CoursService } from './services/cours.service';

>>>>>>> 845015224c7b96d35ea4c17401f975241ff1626e

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditUserComponent,
  ],
<<<<<<< HEAD
  providers: [MoniteurService],
=======

  providers: [TestService,ReponseService,CoursService],

>>>>>>> 845015224c7b96d35ea4c17401f975241ff1626e
  bootstrap: [AppComponent]
})
export class AppModule { }
