import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  email: string = '';
  password: string = '';

  constructor(private Auth: AuthService, private formBuilder: FormBuilder,private route:Router) {
    if(this.Auth.isLoggedIn()){
      alert("Already logged In");
      this.route.navigateByUrl('/home');
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', Validators.required),
    });
  }

  loginUser() {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    if (this.email && this.password) {
      this.Auth.getUserLog().subscribe((res) => {
        const user = res.find((a: any) => {
          return (
            a.email == this.email &&
            a.password == this.decodePass(this.password)
          );
        });
        if (user) {
          this.Auth.setToken(
            '7c140cc490339549ebcd36c1dd72193f467440e5f26cef4c361ddc7127e864d4a0d2de19a9aa7093a67f485f577ffe66e0e1f1e3d14caf85383f296302ed459a'
          );
          this.loginForm.reset();
            this.route.navigateByUrl('/home');
            alert("Logged In");
        }
        else{
          alert("Login Failed");
        }
      },(err)=>{
        alert("Something Went wrong! Server side Error ");
        throw new Error(err);
      });
    }
  }

  // directLogin(data:string){
  //   this.email = data.email;
  //   this.password 
  // }

  decodePass(pass: string) {
    const PassMD5 = Md5.hashStr(pass).toString();
    return PassMD5;
  }

  get Email(): any{
    return this.loginForm.get('email');
  }

  get Passwd(): any{
    return this.loginForm.get('password');
  }
}

