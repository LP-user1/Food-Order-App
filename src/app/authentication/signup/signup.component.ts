import { Router } from '@angular/router';
import { User } from './../../Shared/models/User';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  newUser: User = new User();
  constructor(private Auth: AuthService, private formBuilder: FormBuilder , private route:Router) {
    if(this.Auth.isLoggedIn()){
      alert("Already logged in");
      this.route.navigate(['/home'])
    }
  }

  name: string = '';
  email: string = '';
  password: string = '';
  password1: string = '';

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z A-z]+$'),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      password: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
    },[this.passwordCheck(this.password,this.password1)]);
  }
  passwordCheck(passw:String,conf_pass:String){
    // return function(form:AbstractControl){
    //   const passVal = form.get(passw)?.value
    // }
  }

  signUpUser() {
    if (this.signUpForm.valid) {
      this.newUser.name = this.signUpForm.value.name;
      this.newUser.email = this.signUpForm.value.email;
      this.newUser.password = this.decodePass(this.signUpForm.value.password);
      this.Auth.postUserLog(this.newUser).subscribe(
        (res) => {
          if (res) {
            alert("Welcome "+this.signUpForm.value.name+"! You have successfully signedUp");
            this.route.navigateByUrl('/login');
          }
          else{
            alert('Sign up Failed');
          }
        },
        (err) => {
          alert('Something Went Wrong!! Server did not work properly');
        }
      );
    }
  }

  decodePass(pass: string) {
    const PassMD5 = Md5.hashStr(pass).toString();
    return PassMD5;
  }

  get Name(): any {
    return this.signUpForm.get('name');
  }

  get Email(): any {
    return this.signUpForm.get('email');
  }

  get Password(): any {
    return this.signUpForm.get('password');
  }
  get Password1(): any {
   return this.signUpForm.get('password1');
  }
}
