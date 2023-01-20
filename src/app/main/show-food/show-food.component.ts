import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Shared/models/Food';
import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';


@Component({
  selector: 'app-show-food',
  templateUrl: './show-food.component.html',
  styleUrls: ['./show-food.component.scss']
})
export class ShowFoodComponent implements OnInit {

  food:any='';
  constructor(private foodService:FoodService , private route:ActivatedRoute , private cartService:CartService , private auth:AuthService) {
    route.params.subscribe((params)=>{
      if(params['id']){
          this.foodService.getAll().subscribe((res)=>{
            this.food = res.find(food=>food.id == params['id']);
         })
      }
    })
  }


  ngOnInit(): void {

  }
  addToCart(){
    this.auth.isLoggedIn()?this.cartService.addToCart(this.food) : alert("You need to login first");
  }

}
