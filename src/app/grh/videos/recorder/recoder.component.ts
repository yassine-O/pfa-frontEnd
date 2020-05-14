/// <reference types="@types/dom-mediacapture-record" />
import { Injectable, Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
// import * as $ from "jquery";
import { Base64Data } from './base64Data';
import { HttpClient} from '@angular/common/http'
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recoder',
  templateUrl: './recoder.component.html',
  styleUrls: ['./recoder.component.css']
})
export class RecoderComponent implements OnInit {
  fileName: number = -1;
  mediaRecorder: MediaRecorder;
  notStartedYet = true
  videoRecorded: boolean = false;
  videoURL: SafeUrl;
  chunks: Blob[];
  @Output() recordFinish = new EventEmitter<number>();
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
  @Input() recorduration: number = 0;//seconds
  @Input() postRequest: string;

  async userMedia() {
    let temp = null;
    await navigator.mediaDevices.getUserMedia(this.constraintObj)
      .then(function (mediaStreamObj) {
        console.log("userMedia" + mediaStreamObj)
        let m = new MediaRecorder(mediaStreamObj);
        temp = mediaStreamObj;

      }).catch(function (er) {
        console.log(er);
      })
    this.mediaStream = new MediaStream(temp);
    this.mediaRecorder = new MediaRecorder(this.mediaStream)
    this.mediaRecorder.ondataavailable = this.dataAvailable.bind(this);
    this.mediaRecorder.addEventListener('ondataavailable', ev => {
      this.dataAvailable(ev);
    });

  }

  constructor(private http: HttpClient,
    private authService: AuthorizationService,
    private dom: DomSanitizer, 
    private cdRef: ChangeDetectorRef) {
    this.userMedia();
    this.chunks = [];
  }
  start() {
    this.mediaRecorder.start(5 * 1000);
    this.notStartedYet = false;
    console.log(this.mediaRecorder.state);
  }

  stop() {
    console.log("stop")
    this.mediaRecorder.requestData();
    this.mediaRecorder.stop()


  }
  play() {
    this.mediaStream = null
    let blob = new Blob(this.chunks, {
      type: "video/mp4"
    })
    let u = URL.createObjectURL(blob);
    this.videoURL = this.dom.bypassSecurityTrustUrl(u);
    this.videoRecorded = true;
    //wern't detect below change
    this.cdRef.detectChanges();
    this.recordFinish.emit(this.fileName);
  }
  reRecord() {
    this.chunks = []
    this.videoRecorded = false;
    this.userMedia();
    this.notStartedYet = true
    
    this.unSaveVideo(this.fileName)
    this.recordFinish.emit(-1);
    // this.unSaveVideo(this.fileName)
    this.fileName = -1;

  }
  dataAvailable(ev) {
    console.log("data available")
    this.chunks.push(ev.data);
    var reader = new FileReader();
    reader.readAsDataURL(ev.data);
    this.recorduration = this.recorduration - 5;
    this.recorduration != 0 ? "do nothing" : this.mediaRecorder.stop();
    
    reader.onloadend = function () {
      console.log(reader.result)
      let base64Data = new Base64Data(reader.result);
      this.sendChunk(base64Data)


    }.bind(this)

  }


  ngOnInit(): void {



  }
  sendChunk(base64Data: Base64Data) {
    this.http.post<number>(
      this.postRequest + this.fileName,
      base64Data,
      {
        headers: this.authService.getAuthorizationHeader()
      }
    )
      .subscribe(
        (data) => {
        this.fileName = data
          this.mediaRecorder.state === "recording" ? "do not thing" : this.play()
        },
        error => console.error('There was an error!', error)
      );
  }
  unSaveVideo(fileName) {
    this.http.delete(
      this.postRequest + fileName,

      {
        headers: this.authService.getAuthorizationHeader()
      }
    )
      .subscribe(
        (data) => {
            console.log("delteddddddd"+data)
        },
        error => console.error('There was an error!', error)
      );
  }
}

