import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { AnnonceComponent } from './grh/annonce/annonce.component';
import { AddAnnonceComponent } from './grh/annonce/add-annonce/add-annonce.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  
  {
    path: 'hello',
    data: { title: 'hello' },
    component:HelloComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path:"Annonce",
    component:AnnonceComponent,
    
  },
  {
    path:"addAnnonce",
    component:AddAnnonceComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AnnonceComponent,
    AddAnnonceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
