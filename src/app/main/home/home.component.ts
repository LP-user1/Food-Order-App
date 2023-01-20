import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Shared/models/Food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private foodService: FoodService , private route:ActivatedRoute) {}

  food: Food[] = [];
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['searchItem']){
        this.foodService.getAll().subscribe((res)=>{
          this.food=res.filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
         })
      }
      else if(params['tags']){
        if(params['tags'] == 'All'){
            this.foodService.getAll().subscribe((res)=>{
              this.food=res
            },(err)=>{
              throw new Error(err);
            })
        }
        else{
          this.foodService.getAll().subscribe((res)=>{
            this.food=res.filter(food => food.tags?.includes(params['tags']))
          },(err)=>{
            throw new Error(err);
          })
        }
      }
      else{
        this.getFoodData();
      }
      
    })
    
  }

  getFoodData() {
    this.foodService.getAll().subscribe(
      (res) => {
        if (res) {
          this.food = res;
        } else {
          alert('No fields');
        }
      },
      (err) => {
        alert('Something went wrong!. Server not stable');
      }
    );
  }
}





