import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
import { QuestionService } from '../category/question.service';
import { Question } from './add-question/question';
import { Token } from 'src/app/sign-in-up/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() selectMode: boolean = false;
  categories: Category[];
  questions: Question[];
  page = 1;
  @Output() questionSelected = new EventEmitter<Question>();
  nombreVideo = 30;
  pages: number[];
  actualCategory:string;
  loading = false;
  questionSelcted:Question// question slected to delete 

  totalPages: number;
  @Input()iDsOfSelectedQuestion: number[];
  constructor(
    private router:Router,
    public token:Token,    
    private categoryService: CategoryService,
    private questionService: QuestionService) {

    let i = 1
    let nombrepages = Math.floor(this.nombreVideo / 9)
    console.log(nombrepages)
    this.pages = [];
    while (nombrepages >= i) {
      this.pages.push(i);
      i++;
    }
    this.categories = [];
    this.questions = [];
 

    this.categories = [];
    this.categoryService.fetchCategories().subscribe(
      (categories) => {


        if (categories.length != 0) {
          this.actualCategory=categories[0].libelle;
          console.log(this)
          console.log(this.categories[0])
          this.questionService.fetchQuestion(categories[0].idCategorie, 1).
            subscribe(
              (data) => {
                
                const totalPages = data.headers.get('page');
                this.questions = data.body;
                this.totalPages = parseInt(totalPages);
                let i = 1;
                this.pages = [];
                while (this.totalPages >= i) {
                  this.pages.push(i);
                  i++;
                }
                this.loading = false;
                this.categories = categories;
              }

            )
        }else{
          this.loading=false
        }
      }
    )
    
   
  }

  ngOnInit(): void {
    this.categoryService.fetchCategories().subscribe(
      (categories) => {


        if (categories.length != 0) {
          this.questionService.fetchQuestion(categories[0].idCategorie, 1).
            subscribe(
              (data) => {
                const totalPages = data.headers.get('page');
                this.questions = data.body;
                this.totalPages = parseInt(totalPages);
                let i = 1;
                this.pages = [];
                while (this.totalPages >= i) {
                  this.pages.push(i);
                  i++;
                }
                this.loading = false;
                this.categories = categories;
              }

            )
        }else{
          this.loading=false
          
        }
      }
    )

  }
  catSelected(cat:number,libelle:string) {
      console.log(cat)
      this.loading=true;
      this.actualCategory=libelle;
      this.questionService.fetchQuestion(cat, 1).
        subscribe(
          (data) => {
            const totalPages = data.headers.get('page');
            this.questions = data.body;
            this.totalPages = parseInt(totalPages);
            let i = 1;
            this.pages = [];
            while (this.totalPages >= i) {
              this.pages.push(i);
              i++;
            }
            this.loading = false;
            
          }
        )
  }
  onSelectVideo(id: number) {
    this.selectQuestion(id);
     this.questionSelected.emit(this.questionSelcted)
  }
  deleteQuestionConfirmed(){
    console.log(this.questionSelcted)
  }
  selectQuestion(idQuestion:number){
    this.questions.forEach(
      (question)=>{
            question.idQuestion==idQuestion?this.questionSelcted=question:" do nothing";
      }
    )
  }
  questionAllreadySelected(id:number){
      try{
        return this.iDsOfSelectedQuestion.includes(id);
      }catch(e){
        return false;
      }
      
  }
  addQuestion(){
    console.log("addddd");
    this.router.navigate(["addQuestion"]);
  }

}
