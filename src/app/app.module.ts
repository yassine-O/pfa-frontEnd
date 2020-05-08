import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { AnnonceComponent } from './grh/annonce/annonce.component';
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
  }
  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AnnonceComponent,
  ],
  imports: [
    BrowserModule,
  
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
