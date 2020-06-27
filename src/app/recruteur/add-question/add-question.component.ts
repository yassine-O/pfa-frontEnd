import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  chunks = [];
  videoURL = null;
  isFinished: boolean = false;

  constructor(private dom: DomSanitizer) { }

  ngOnInit(): void {
  }

  getVideoData(ev){
    this.chunks.push(ev.data);
    if(this.isFinished){
      this.stream();
    }
  }

  stream(){
    let blob = new Blob(this.chunks, { 'type' : 'video/mp4;' });
    let u =URL.createObjectURL(blob);
    this.videoURL = this.dom.bypassSecurityTrustUrl(u);
    console.log(this.videoURL);
  }

  onStop(){
    this.isFinished = true;
  }

}
