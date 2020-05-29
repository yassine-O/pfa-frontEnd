import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';
import { Test } from '../model/test';
import { Token } from 'src/app/sign-in-up/token';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {
  interviewFinished:boolean=false;
  recording="interview"
  interviewStarted:boolean=false;
  modeRecording:boolean//recording or watching question
  postRequest:string;
  test:Test;
  actualQuestion:number=-1;//actual question
  fileName:number=-1//interview Id 
  constructor(
    private cdRef: ChangeDetectorRef,
    public token:Token,
    private activeRoute :ActivatedRoute,
    private testService:TestService) { }

  ngOnInit(): void {
    let idTest:number=parseInt(this.activeRoute.snapshot.paramMap.get("id"));

    console.log(idTest)
    this.testService.getTest(idTest).subscribe(
      (data)=>{
       this.test=data;
      }
    )
  }
  updatePostRequest(){
    this.postRequest="http://localhost:8080" +"/entretien/"+this.test.annonce.idAnnonce+"/"+
    this.test.questions[this.actualQuestion].idQuestion+"/"
  }
  startInterview(){
    this.actualQuestion++;
    this.interviewStarted=true;
    this.modeRecording=false;
  }
  nextQuestion($fileName){
    console.log($fileName+"hhhhhhhhhhhh")
    this.fileName=$fileName
    this.actualQuestion++;
    if(this.actualQuestion<this.test.questions.length){
      console.log("this.actualQuestion"+this.actualQuestion)
      this.modeRecording=false;
      this.cdRef.detectChanges();
    }else{
      this.interviewFinished=true;
      this.testService.saveEntretien(this.fileName,this.test.idTest).subscribe(
        (d)=>{

        },
        (e)=>{

        }
      )
      console.log("entretirn finished");
    }
    
  }
  answer(){
    this.updatePostRequest();
    this.modeRecording=true;
    this.cdRef.detectChanges();
  }
  ended(){
   this.answer();
  }

}
