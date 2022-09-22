import { FoodService } from './../../services/food/food.service';
import { CartItem } from './../../Shared/models/CartItem';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Shared/models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  visible:boolean=false;
  emptyCartMsg:string="! Oops Your Cart is Empty"


  cart!: Cart;
  constructor(private cartService: CartService ,private foodSr:FoodService) {


    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });

    // this.cartService.addToCart()
    
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInStr:string){
    const quantity=parseInt(quantityInStr);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }
}
