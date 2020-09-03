import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  src:string;

  constructor(private dialogRef:MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) data) {
    console.log(data);
    this.src="http://localhost:8080/watch/"+data.path;
   }

  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
  }

}
