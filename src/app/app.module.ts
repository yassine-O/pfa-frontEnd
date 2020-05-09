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
import { VideosComponent } from './grh/videos/videos.component';
import { AddQuestionComponent } from './grh/videos/add-question/add-question.component';
import { RecordVideoComponent } from './grh/videos/record-video/record-video.component';
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
    VideosComponent,
    AddQuestionComponent,
    RecordVideoComponent,
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
