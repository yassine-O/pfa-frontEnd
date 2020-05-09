/// <reference types="@types/dom-mediacapture-record" />
import {  Injectable,Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";
import { Base64Data } from './base64Data';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-recoder',
  templateUrl: './recoder.component.html',
  styleUrls: ['./recoder.component.css']
})
export class RecoderComponent implements OnInit {
  mediaRecorder:MediaRecorder;
  notStartedYet=true
  constraintObj =
    {
      audio: true,
      video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
      }
    };
  muted = true;//video property
  mediaStream: MediaStream = null;
  @Input() recorduration:number=0;//seconds
  @Input() postRequest: any;

  async userMedia() {
    let temp = null;
    await navigator.mediaDevices.getUserMedia(this.constraintObj)
      .then(function (mediaStreamObj) {
        console.log("userMedia"+mediaStreamObj)
        let m=new MediaRecorder(mediaStreamObj);
        temp = mediaStreamObj;

      }).catch(function (er) {
        console.log(er);
      })
    this.mediaStream = new MediaStream(temp);
    this.mediaRecorder=new MediaRecorder(this.mediaStream)
    this.mediaRecorder.ondataavailable=this.dataAvailable.bind(this);
    this.mediaRecorder.addEventListener('ondataavailable', ev => {
      this.dataAvailable(ev);
  });
    
  }
  
   constructor(private http:HttpClient) {
   this.userMedia();
   
   
   
  }
  start(){
    this.mediaRecorder.start(5*1000);
    this.notStartedYet=false;
    console.log(this.mediaRecorder.state);
  }
  stop() {
    this.mediaRecorder.stop();
    console.log(this.mediaRecorder.state);
    
  }
  hello(){
    console.log("hello world");
  }
  dataAvailable(ev){
    this.recorduration=this.recorduration-5;
    this.recorduration!=0?"do nothing":this.stop();
    console.log(this.recorduration);
    console.log("ev data");
    var reader = new FileReader();
    reader.readAsDataURL(ev.data);
    let sendTo=this.postRequest;
    let httpTemp=this.http;
    reader.onloadend = function () {
        let  base64Data=new Base64Data(reader.result,1);
        console.log("sendTo "+sendTo)
        httpTemp.post(sendTo,base64Data).subscribe({
          next: data => console.log(data),
          error: error => console.error('There was an error!', error)
      });
    }
  
  }
  

  ngOnInit(): void {
   
    

  }


}