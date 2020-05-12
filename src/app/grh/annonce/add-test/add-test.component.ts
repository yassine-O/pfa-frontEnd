import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Video } from '../../videos/video';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  videos :Video[] = [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.videos, event.previousIndex, event.currentIndex);
    console.log(this.videos)
  }
  remove(){
    console.log("hhh")
  }
  videoSelected($event){
    console.log("hh")
    this.videos.push($event)
  }

}
