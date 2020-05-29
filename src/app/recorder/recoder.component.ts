/// <reference types="@types/dom-mediacapture-record" />
// 3 slache tay inculde dak file f had file w dak file fih
import {  Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
// import * as $ from "jquery";
import { Base64Data } from './base64Data';
import { HttpClient } from '@angular/common/http'
import { AuthorizationService } from 'src/app/sign-in-up/authorization.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recoder',
  templateUrl: './recoder.component.html',
  styleUrls: ['./recoder.component.css']
})
export class RecoderComponent implements OnInit {
  autoStart: number = 10;
  @Input() recording: string;
  @Input() fileName: number = -1;
  mediaRecorder: MediaRecorder;
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
  @Input() recorduration: number = -1;//seconds -1 no limit
  @Input() postRequest: string;

  userMedia() {
    navigator.mediaDevices.getUserMedia(this.constraintObj)
      .then(function (mediaStreamObj) {
        this.mediaStream = mediaStreamObj;
        this.mediaRecorder = new MediaRecorder(this.mediaStream)
        this.mediaRecorder.ondataavailable = this.dataAvailable.bind(this);
        this.cdRef.detectChanges();

      }.bind(this)).catch(function (er) {
        console.log(er);
      })

  }

  constructor(private http: HttpClient,
    private authService: AuthorizationService,
    private dom: DomSanitizer,
    private cdRef: ChangeDetectorRef) {
    this.userMedia();
    this.chunks = [];

  }

  start() {
    try {
      this.autoStart = null;
      this.mediaRecorder.start(5 * 1000);
      if (this.recorduration != -1) {
        this.recorduration = this.recorduration * 60;
        this.autoFinish();
      }
     
      this.cdRef.detectChanges();
      console.log(this.mediaRecorder.state);
    } catch (e) {

    }
  }

  stop() {
    try {
      this.autoFinish = null
      console.log("stop")
      this.mediaRecorder.requestData();
      this.mediaRecorder.stop()
    } catch (e) {

    }



  }
  play() {
    this.mediaStream.getTracks().forEach(track => track.stop())

    //this.mediaStream = null
    // this.mediaRecorder=null;
    // f interview matanbghiwhch n3tiwh ytfrj f response
    if (this.recording != "interview") {
      let blob = new Blob(this.chunks, {
        type: "video/mp4"
      })
      let u = URL.createObjectURL(blob);
      this.videoURL = this.dom.bypassSecurityTrustUrl(u);
    }
    this.videoRecorded = true;
    //wern't detect below change
    this.cdRef.detectChanges();
    this.recordFinish.emit(this.fileName);
  }
  reRecord() {
    this.chunks = []
    this.videoRecorded = false;
    this.userMedia();
    this.unSaveVideo(this.fileName)
    this.recordFinish.emit(-1);
    this.fileName = -1;
  }


  dataAvailable(ev) {
    console.log("data available")
    this.chunks.push(ev.data);
    var reader = new FileReader();
    reader.readAsDataURL(ev.data);
    // if (this.recorduration != -1) {//-1 where thee is no limit
    //   this.recorduration = this.recorduration - 5;
    //   this.recorduration != 0 ? "do nothing" : this.mediaRecorder.stop();
    // }

    reader.onloadend = function () {
      console.log(reader.result)
      let base64Data = new Base64Data(reader.result);
      this.sendChunk(base64Data)


    }.bind(this)

  }
  autoFinish() {
    setTimeout(
      () => {
        if (this.recorduration > 0 && this.autoFinish != null) {
          this.recorduration--;
          this.cdRef.detectChanges();
          this.autoFinish();
        } else {
          this.stop();
        }
      }, 1000
    )
  }
  autoStarting() {
    setTimeout(
      () => {
        if (this.autoStart != 0 && this.autoStarting != null) {
          this.autoStart--;
          this.autoStarting();
          this.cdRef.detectChanges();
        } else {
          this.start();
        }
      }, 1000
    )
  }

  ngOnInit(): void {

    this.cdRef.detectChanges();
    this.autoStarting();

  }
  sendChunk(base64Data: Base64Data) {
    console.log(base64Data)
    console.log(this.postRequest)
    this.http.post<number>(
      this.postRequest + this.fileName,
      base64Data
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
    )
      .subscribe(
        (data) => {
          console.log("delteddddddd" + data)
        },
        error => console.error('There was an error!', error)
      );
  }
}

