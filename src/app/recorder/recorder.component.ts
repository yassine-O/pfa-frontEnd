import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';

declare const MediaRecorder: any;

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements OnInit,AfterViewInit {
  @Input() chunks = [];
  @ViewChild('video') video;
  mediaStream: MediaStream = null;
  mediaRecorder: any;
  isRecording: boolean = false;
  status: string = "PERMISSION";
  @Output() videoData = new EventEmitter();
  
  videoURL: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  /* userMedia(){
    navigator.mediaDevices.getUserMedia(this.constraintObj)
      .then( mediaStreamObj => {
        this.mediaStream = mediaStreamObj;
        this.mediaRecorder = new MediaRecorder(this.mediaStream);
        this.mediaRecorder.ondataavailable = this.dataAvailable.bind(this);

      })
      .catch(function (er) {
        console.log(er);
      })
   }*/

  userMedia(){
    let constraintObj = { 
      audio: false, 
      video: { 
          facingMode: "user", 
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 } 
      } 
    };
    navigator.mediaDevices
      .getUserMedia(constraintObj)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: MediaStream){
    this.status = "SUCCESS";
    let video: HTMLVideoElement = this.video.nativeElement;
    this.mediaStream = stream;
    this.mediaRecorder = new MediaRecorder(this.mediaStream);
    video.srcObject  = stream;
    this.toggleControls();
    this.mediaRecorder.ondataavailable = this.dataAvailable.bind(this);
  }

  errorCallback(err){
    console.log(err);
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  dataAvailable(ev){
    this.videoData.emit(ev);
  }

  start(){
    this.status = "RECORDING";
    this.isRecording = true;
    this.mediaRecorder.start(5 * 1000);
    console.log(this.mediaRecorder.state);
  }

  stop(){
    this.status = "FINISHED";
    this.isRecording = false;
    this.mediaRecorder.stop();
    console.log(this.mediaRecorder.state);
    let stream = this.mediaStream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    this.toggleControls();
  }

  stream(){
    //this.status = "REPLAY";
    let blob = new Blob(this.chunks, { 'type' : 'video/mp4;' });
    let videoURL =URL.createObjectURL(blob);
    let video: HTMLVideoElement = this.video.nativeElement;
    video.srcObject=null;
    video.src = videoURL;
  }

}
