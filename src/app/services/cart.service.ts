import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../Shared/models/cart';
import { CartItem } from '../Shared/models/CartItem';
import { Food } from '../Shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart>=new BehaviorSubject(this.cart);

  // addToCart(food: Food): void {
  //   let cartItem = this.cart.items.find((item) => item.food.id == food.id);
  //   if (cartItem) {
  //     this.changeQuantity(food.id, cartItem.quantity + 1);
  //     return;
  //   }
  //   this.cart.items.push(new CartItem(food));
  // }

  addToCart(food: Food): void {
    let cartItem = this.cart.items
      .find(item => item.food.id === food.id);
    if (cartItem)
      return alert('The product is already in the cart');

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
    alert("Product added to cart");
  }

  removeCartItem(foodId: number): void {
    this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId)
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum , currentItem)=> prevSum + currentItem.price , 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum , currentItem)=> prevSum + currentItem.quantity , 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  gatCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
    
  }
  constructor() {
  }
}
