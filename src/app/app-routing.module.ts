import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnnoncesComponent } from './recruteur/annonces/annonces.component';
import { NewAnnonceComponent } from './recruteur/new-annonce/new-annonce.component';
import { RecorderComponent } from './recorder/recorder.component';
import { QuestionsComponent } from './recruteur/questions/questions.component';
import { AddQuestionComponent } from './recruteur/add-question/add-question.component';
import { OffresComponent } from './candidat/offres/offres.component';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'annonces', component : AnnoncesComponent},
  {path : 'new-annonce', component : NewAnnonceComponent},
  {path : 'recorder', component : RecorderComponent},
  {path : 'MesQuestions', component : QuestionsComponent},
  {path : 'enregistrer-une-question', component : AddQuestionComponent},
  {path : 'offresEmploi', component : OffresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
