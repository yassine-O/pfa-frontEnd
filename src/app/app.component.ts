import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from './sign-in-up/token';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from './sign-in-up/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa-frontEnd';
  constructor(private route:Router,
              private http:HttpClient,
              public authorizationService:AuthorizationService){
   
  }
  ngOnInit(): void {
    let token=new Token().getToken("token");
    // let promise= this.http.post<boolean>("http://localhost:8080/validate",token).toPromise()
    // promise.then(
    //   (data)=>{
    //    this.logged=data;
    //    console.log(data)
    //   }
    // )
    // promise.catch((err)=>{
      
    //   console.log(err)
    // })
  }

//  loggedIn(){
//   console.log(" i am here")
//   this.logged=true;
//  }
//  logout(event){
//     console.log("logout")
//     this.logged=false
//  }
  
  
}
