import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../sign-in-up/token';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  constructor(private http:HttpClient) { }
  message="loading..."
  ngOnInit(): void {
    let header= new HttpHeaders();
    let token =new Token().getToken("token");
    console.log(token)
    let newHeader=header.append("Authorization","Bearer "+token);//header is immutable
    console.log(header.has("Authorization"))
    this.http.get<string>("http://localhost:8080/hello",{
      headers:newHeader
    }).subscribe(
      data=>{
       this.message=data;
      },
      error=>{
        this.message=error;
      }
    )
  }

}