import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from './sign-in-up/token';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa-frontEnd';
  role="grh";
  logged:boolean=false//if the user is logged 
  constructor(private route:Router,
              private http:HttpClient){
   
  }
  ngOnInit(): void {
    let token=new Token().getToken("token");
   let promise= this.http.post("http://localhost:8080/validate",token).toPromise()
    promise.then(
      (data)=>{
       this.logged=true;
      }
    )
    promise.catch((err)=>{
      console.log(err)
    })
  }

 loggedIn(){
  console.log(" i am here")
  this.logged=true;
  this.route.navigate["/hello"]
 }
  
  
}
