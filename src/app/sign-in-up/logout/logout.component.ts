import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private token:Token,
    private route:Router,
    private authorizationService:AuthorizationService) { }
  
  ngOnInit(): void {
    
    this.authorizationService.reset()
    this.route.navigateByUrl("");
    
  }

}
