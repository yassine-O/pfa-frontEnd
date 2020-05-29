import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Question } from './question';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/category.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  category:Category=new Category()
  categories:Category[];
  question:Question=new Question();
 // duration:number=2;
  selectedCategory:Category=new Category();
  constructor(private cdRef: ChangeDetectorRef,
    private categoryService:CategoryService) { 
    this.question.idQuestion=-1;
    this.categories=[];
    
   
    
 
  }

  ngOnInit(): void {
  }
  onSelectCategory(id:number,libelle:string){
    this.selectedCategory.idCategorie=id;
    this.selectedCategory.libelle=libelle;
   
    this.cdRef.detectChanges()
  }
  recordFinish($event){
        console.log(this.question.idQuestion=$event);
       
        this.fetchCategories();
  }
  inputLibelle(){
    this.cdRef.detectChanges()
  }
  saveCategory(){

     
    this.categoryService.saveCategory(this.category).subscribe(
      (data)=>{
        this.categories.push(data);
        this.cdRef.detectChanges();
      },
      (errr)=>{
        console.log(errr)
      }
    )
  }
  fetchCategories(){
    this.categoryService.fetchCategories()
    .subscribe(
      (data)=>{this.categories=data;
        this.cdRef.detectChanges();},
      (error)=>console.log("error fetching categories")
    )
  }
  saveVideo(){
   this.categoryService.addQuestionToCategorie(this.question,this.selectedCategory.idCategorie)
   .subscribe(
     (data)=>{console.log(data)}
   )
  }
  durationChange(){
      this.cdRef.detectChanges();
 }
 hh(){
  this.cdRef.detectChanges();
 }

}
