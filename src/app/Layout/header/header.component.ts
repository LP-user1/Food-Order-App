import { AuthService } from './../../authentication/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged:boolean=true;
  constructor(private Auth:AuthService) { 
  }

  ngOnInit(): void {
    this.Auth.isLoggedIn()? this.isLogged=false : this.isLogged=true;
  }

  logout(){
    this.Auth.logout();
    return this.isLogged =true; //user no more logged in
  }
}
