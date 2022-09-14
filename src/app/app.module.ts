import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReponseService } from './services/reponse.service';
import { CoursService } from './services/cours.service';
import { Observable } from 'rxjs';
import { UtilisateurService } from './services/utilisateur.service';
import { EdituserComponent } from './edituser/edituser.component';
import { TestService } from './services/test.service';
import { EditcoursComponent } from './editcours/editcours.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ExamenFinalService } from './services/examenfinal.service';
import { ExamenBlancService } from './services/examenblanc.service';
import { BrowserModule } from '@angular/platform-browser';
import { StatistiqueService } from './services/statistique.service';
import { StatistiqueComponent } from './statistique/statistique.component';



@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }

}
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
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditUserComponent,
    EditcoursComponent,
    InscriptionComponent,
    EdituserComponent,
    StatistiqueComponent,
  ],
  
  providers: [StatistiqueService,/*MoniteurService,*/TestService,ReponseService,ReponseService,CoursService,UtilisateurService,ExamenBlancService,ExamenFinalService,{provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
