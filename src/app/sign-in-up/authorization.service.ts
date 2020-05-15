import { Injectable } from '@angular/core';
import { Token } from './token';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationResponse } from './login/AuthenticationResponse.model';
import { RegisterForm } from './register-form';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  
  logged: boolean;
  role: string;
  errorLogin: string ;
  errorRegister: string;

  constructor(private http: HttpClient,
    private tokenService:Token) {
    this.validateAuthentication();
  }
  getAuthorizationHeader(): HttpHeaders {
    let header = new HttpHeaders();
    let token = this.tokenService.getToken("token");
    console.log(token)
    let newHeader = header.append("Authorization", "Bearer " + token);//header is immutable
    console.log(header.has("Authorization"))
    return newHeader;
  }
  validateAuthentication() {
    let token = this.tokenService.getToken("token");
    if (token) {
      this.http.post<boolean>("http://localhost:8080/validate", token).subscribe
        (
          (data) => {
            console.log(data);
            this.logged = data;
          },
          (err) => {

          }
        )
    }


  }
  authenticate(cridentia) {
    this.http.post<AuthenticationResponse>('http://localhost:8080/authenticate', cridentia)
      .subscribe
      (data => {
        
        this.tokenService.saveToken(data.jwt, "token")
        this.logged = true;
        this.role = data.role
        
      },
        error => {
          if (error.status == 401) {
            this.errorLogin = error.error;

          }
          console.log(error)
        })
  }
  register(registerForm: RegisterForm) {
    this.http.post<AuthenticationResponse>("http://localhost:8080/" + registerForm.role, registerForm).subscribe(
      (data) => {
        
       
        this.tokenService.saveToken(data.jwt, "token");
        this.logged=true;
        this.role = data.role
      },
      (error) => {
        console.log(error);
        this.errorRegister = error.error;

      }
    )
  }
  reset(){
    this.tokenService.removeToken("token")
    this.logged=false;
    this.role=null;
    this.errorLogin=null;
    this.errorRegister=null;
  }  
}
