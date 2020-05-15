import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterForm } from '../register-form';
import { HttpClient} from '@angular/common/http';
import {Token} from '../token';
import { AuthenticationResponse } from './AuthenticationResponse.model';
import { AuthorizationService } from '../authorization.service';



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
  constructor(public http:HttpClient,
    public authenticationService:AuthorizationService) { }

  ngOnInit(): void {
  }
  onselectRole(role:string){
      this.registerForm.role=role;
      console.log(role);
  }
  register(){
    
    console.log(this.registerForm)
    this.authenticationService.register(this.registerForm)
    
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

   this.authenticationService.authenticate(cridentia); 
  }
}
