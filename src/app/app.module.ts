import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AnnonceComponent } from './grh/annonce/annonce.component';
import { AddAnnonceComponent } from './grh/annonce/add-annonce/add-annonce.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './grh/questions/questions.component';
import { AddQuestionComponent } from './grh/questions/add-question/add-question.component';
import { RecoderComponent } from './recorder/recoder.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SingleAnnonceComponent } from './grh/annonce/single-annonce/single-annonce.component';
import { AddTestComponent } from './grh/annonce/add-test/add-test.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LogoutComponent } from './sign-in-up/logout/logout.component';
import { EntretienComponent } from './candidat/entretien/entretien.component';
import { AuthInterceptor } from './sign-in-up/authorizationInterceptor.service';

const routes: Routes = [

  
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: "Annonce",
    component: AnnonceComponent,

  },
  {
    path: "addAnnonce",
    component: AddAnnonceComponent
  },
  {
    path: "",
    pathMatch: 'full',
    component: AnnonceComponent
  },
  {
    path: "annonce/:id",
    pathMatch: 'full',
    component: SingleAnnonceComponent
  },
  {
    path: "addTest",
    pathMatch: 'full',
    component: AddTestComponent
  },
  {
    path: "test/:id",
    pathMatch: 'full',
    component: EntretienComponent
  },
  {
    path: "addQuestion",
    pathMatch: 'full',
    component: AddQuestionComponent
  },
  {
    path: "logout",
    pathMatch: 'full',
    component: LogoutComponent
  },
 { path: "Questions",
    pathMatch: 'full',
    component: QuestionsComponent
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
    QuestionsComponent,
    AddQuestionComponent,
    RecoderComponent,
    SpinnerComponent,
    SingleAnnonceComponent,
    AddTestComponent,
    LogoutComponent,
    EntretienComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent,]
})
export class AppModule { }
