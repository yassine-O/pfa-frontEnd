import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  categories:Category[];
  constructor() { 
    this.categories=[];
    let c1=new Category();
    let c2=new Category();
    let c3=new Category();
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    c1.libelle="programming";
    c1.id=1;
    c2.libelle="finance";
    c2.id=2;
    c3.libelle="marketing"
    c3.id=3;
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
    this.categories.push(c1,c2,c3);
  }

  ngOnInit(): void {
  }
  onSelectCategory(id:number){
    console.log("category  with id is selected:"+id );
  }
}
