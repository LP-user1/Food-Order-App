import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiUrl="http://localhost:3000/";

  constructor(private Http:HttpClient, private route:Router) { 
  }

  getUserLog(){
  
    return this.Http.get<any>(this.ApiUrl+"userAcc");
  }

  postUserLog(data:any){

    return this.Http.post<any>(this.ApiUrl+"userAcc",data);
  }

  // .pipe(map((res:any)=>{
  //   return res;
  // }));

  setToken(token:string):void{
    return localStorage.setItem('Token',token);
  }

  getToken():string|null{
    return localStorage.getItem('Token');
  }

  isLoggedIn(){
    return this.getToken() !=null;
  }

  logout(){
    localStorage.removeItem('Token');
    alert("Successfully Logout");
    this.route.navigateByUrl('/home');
  }
}
