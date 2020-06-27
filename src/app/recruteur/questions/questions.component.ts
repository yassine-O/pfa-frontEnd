import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { Category } from 'src/app/model/category';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { VideoComponent } from 'src/app/video/video.component';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categories: Category[];
  selectedCategory: number;
  questions: Question[];
  testQuestions :Question[] = [];
  iDsOfSelectedQuestion:Array<number>=[];

  constructor(private qstService: QuestionService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  listCategory() {
    this.qstService.getCategories()
      .subscribe(
        (catgories)=>{
           this.categories=catgories
           if(this.categories.length>0){
             this.selectedCategory=this.categories[0].id;
             this.listQuestion()
           }
        }
      )
  }
  listQuestion(){
    this.qstService.getQuestions(this.selectedCategory)
      .subscribe(
        (questions)=>this.questions=questions
      )
  }
  change(id){
    this.selectedCategory=id;
    this.listQuestion();
  }

  open(idQuestion){
    console.log(idQuestion)
    let config=new MatDialogConfig();
    config.disableClose=true;
    config.autoFocus=true;
    config.width="80%";
    config.panelClass="custom-modalbox"
    config.data={idQuestion:idQuestion}
    const dialogRef = this.dialog.open(VideoComponent,config);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
    console.log(this.questions)
  }

  remove(index:number,idQuestion:number){
    
    this.testQuestions.splice(index, 1);
  
  }

  selectVideo(question){
    this.testQuestions.push(question);
    
    console.log(this.testQuestions)
  }

  isSelected(idQuestion):boolean{
      return this.testQuestions.some(qst=>qst.id===idQuestion)
  }

}
