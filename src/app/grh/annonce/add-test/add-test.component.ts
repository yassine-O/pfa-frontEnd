import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Question } from '../../questions/add-question/question';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  questions :Question[] = [
    
  ];
  iDsOfSelectedQuestion:Array<number>=[];
  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
    console.log(this.questions)
  }
  remove(index:number,idQuestion:number){
    
    this.questions.splice(index, 1);
    let indexId=this.iDsOfSelectedQuestion.indexOf(idQuestion)
   this.iDsOfSelectedQuestion.splice(indexId,1);
  }
  questionSelected($event){
    if(!this.iDsOfSelectedQuestion.includes($event.idQuestion) ){
      this.questions.push($event);
      this.iDsOfSelectedQuestion.push($event.idQuestion);
    }
   
   
   
  }

}
