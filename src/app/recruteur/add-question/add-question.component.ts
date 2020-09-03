import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @ViewChild('recorder') recorder;
  chunks = [];
  videoURL = null;
  categories :Category[];


  constructor(private qstService : QuestionService) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  getVideoData(ev){
    this.chunks.push(ev.data);
  }

  onAddCategorie(data){
    this.qstService.addCategory(data.libelle).subscribe(res=>{

    }, err=>{

    });
  }

  onGetCategories(){
    this.qstService.getCategories().subscribe(res=>{
      this.categories = res;
    }, err=>{

    });
  }

  onAddQuestion(data){
    let status = this.recorder.status;
    if(status == "FINISHED"){
      let blob = new Blob(this.chunks, { type : 'video/mp4' });
      let formData = new FormData();
      formData.append("video", blob);
      formData.append("titre", data.titre);
      this.qstService.addQuestion(data.categorie, formData)
        .subscribe(res=>{
          
        },err=>{

        });
    }
    else{
      alert("Veuillez d'abord enregistrer votre qestion");
    }
  }

}
