import { AuthService } from './../../authentication/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public Auth:AuthService) {
    this.Auth.isLoggedIn()? this.Auth.isLogged=true : this.Auth.isLogged=false;
  }

  ngOnInit(): void {
  }

  logout(){
    this.Auth.logout();
    return this.Auth.isLogged =false; //user no more logged in
  }
}
