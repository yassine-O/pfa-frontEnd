import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { AnnoncesComponent } from './recruteur/annonces/annonces.component';
import { NewAnnonceComponent } from './recruteur/new-annonce/new-annonce.component';
import { RecorderComponent } from './recorder/recorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './recruteur/questions/questions.component';
import { VideoComponent } from './video/video.component';
import { RequestInterceptorService } from './service/request-interceptor.service';
import { AddQuestionComponent } from './recruteur/add-question/add-question.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OffresComponent } from './candidat/offres/offres.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TimeAgoPipe } from './pipe/time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AnnoncesComponent,
    NewAnnonceComponent,
    RecorderComponent,
    QuestionsComponent,
    VideoComponent,
    AddQuestionComponent,
    OffresComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule,
    CKEditorModule,
    MatTabsModule
  ],
  providers: [AuthenticationService,
          { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [VideoComponent]
})
export class AppModule { }
