import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterForm } from '../register-form';
import { HttpClient} from '@angular/common/http';
import {Token} from '../token';



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
    this.http.post("http://localhost:8080/save",this.registerForm).subscribe(
      (data)=>{
        console.log(data)
        let token=new Token();
        let jwt=token.extract(data,"token")//extract token from data
        token.saveToken(jwt,"token");
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

    this.http.post('http://localhost:8080/authenticate', cridentia).subscribe(data => {
      console.log(data);

      let token: Token = new Token();
      let jwtToken = token.extract(data, "jwt");
      token.saveToken(jwtToken, "token")
      this.logginEvent.emit();

    },
      error => {
        if (error.status == 401) {
          this.errorLogin = error.error;

        }

      })
  }
}
