import { Component, OnInit } from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  categories:string[];
  videos:Video[];
  page=1;
  nombreVideo=30;
  pages:number[];
  constructor() 
  {
    let i=1
    let nombrepages=Math.floor(this.nombreVideo/9)
    console.log(nombrepages)
    this.pages=[];
    while(nombrepages>=i){
      this.pages.push(i);
      i++;
    }
    this.categories=[];
    this.videos=[];
    let video=new Video();
    video.titre="Some quick example text to build on the card title and make up the bulk of the card's content.";
    video.path="http://localhost:8080/videos1"
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.videos.push(video);
    this.categories.push("programming");
    this.categories.push("stages");
    this.categories.push("parascolaire");
    this.categories.push("vie personnel");
    this.categories.push("future")
    this.categories.push("vie personnel");
   }

  ngOnInit(): void {
  }

}
