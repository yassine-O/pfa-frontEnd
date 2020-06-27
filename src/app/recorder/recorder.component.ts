import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare const MediaRecorder: any;

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements OnInit {

  mediaStream: MediaStream = null;
  mediaRecorder: any;
  isRecording: boolean = false;
  @Output() videoData = new EventEmitter();
  constraintObj = { 
    audio: false, 
    video: { 
        facingMode: "user", 
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 } 
    } 
  };

  constructor() { }

  ngOnInit(): void {
    this.userMedia();
  }

  userMedia(){
    navigator.mediaDevices.getUserMedia(this.constraintObj)
      .then( mediaStreamObj => {
        this.mediaStream = mediaStreamObj;
        this.mediaRecorder = new MediaRecorder(this.mediaStream);
        this.mediaRecorder.ondataavailable = this.dataAvailable.bind(this);

      })
      .catch(function (er) {
        console.log(er);
      })
  }

  dataAvailable(ev){
    this.videoData.emit(ev);
  }

  start(){
    this.isRecording = true;
    this.mediaRecorder.start(5 * 1000);
    console.log(this.mediaRecorder.state);
  }

  stop(){
    this.mediaRecorder.stop();
    this.isRecording = false;
    console.log(this.mediaRecorder.state);
  }

}
