import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(user){
    this.authService.login(user)
      .subscribe(resp=>{
        let jwt = resp.headers.get("Authorization");
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("");
      },err=>{
        console.log(err);
      });
  }

}
