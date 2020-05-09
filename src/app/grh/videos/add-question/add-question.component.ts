import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  categories:string[];
  constructor() { 
    this.categories=[]
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
