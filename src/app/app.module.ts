import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestService } from './services/test.service';
import { ReponseService } from './services/reponse.service';
import { CoursService } from './services/cours.service';
import { ExamenBlancService } from './services/examenblanc.service';
import { ExamenFinalService } from './services/examenfinal.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],

  providers: [TestService,ReponseService,CoursService,ExamenBlancService,ExamenFinalService],

  bootstrap: [AppComponent]
})
export class AppModule { }
