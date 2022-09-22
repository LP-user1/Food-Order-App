import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Food } from 'src/app/Shared/models/Food';
import { Tag } from 'src/app/Shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiUrl = "http://localhost:3000/";
  
  constructor(private Http:HttpClient) { }

  // getFoodById(id:number){
  //   return this.getAll().subscribe((res)=>{
  //     res.find(food=>food.id == id) ?? new Food();
  //   })
  // }

  getFoodById(id:number){
    return this.getAll().subscribe((res)=>{
      if(res){
        res.find(food=>food.id == id);
      }
    },(err)=>{
        throw new Error(err);
    })
  }

  getAllTags():Observable<Tag[]>{
    return this.Http.get<any[]>(this.apiUrl+"tags");
  }
  getAll():Observable<Food[]>{
    return this.Http.get<any[]>(this.apiUrl+"food");
  }
}
