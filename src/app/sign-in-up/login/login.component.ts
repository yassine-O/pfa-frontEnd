import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterForm } from '../register-form';
import { HttpClient} from '@angular/common/http';
import {Token} from '../token';
import { AuthenticationResponse } from './AuthenticationResponse.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm=new RegisterForm();
  error:string="";
  errorLogin:string=""
  username:string="";
  password:String="";
  @Output() logginEvent=new EventEmitter()
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onselectRole(role:string){
      this.registerForm.role=role;
      console.log(role);
  }
  register(){
    
    console.log(this.registerForm)
    this.http.post<AuthenticationResponse>("http://localhost:8080/save/"+this.registerForm.role,this.registerForm).subscribe(
      (data)=>{
        console.log(data)
        let token=new Token();
        //extract token from data
        token.saveToken(data.jwt,"token");
        console.log(data.role)
      },
      (error)=>{
          console.log(error);
         this.error=error.error;
      }
    )
  }
  onLogin(){
    console.log(this.username +this.password)
    let criden={
      "username":this.username,
      "password":this.password
    }
    this.login(criden)
  }
  login(cridentia) {

    this.http.post<AuthenticationResponse>('http://localhost:8080/authenticate', cridentia).subscribe(data => {
      console.log(data);

      let token: Token = new Token();
     
      token.saveToken(data.jwt, "token")
      this.logginEvent.emit();
      console.log(data)

    },
      error => {
        if (error.status == 401) {
          this.errorLogin = error.error;

        }
        console.log(error)
      })
  }
}
