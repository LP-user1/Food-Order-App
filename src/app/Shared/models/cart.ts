import { CartItem } from "./CartItem";

export class Cart{
  
  items:CartItem[]=[];
  // get totalPrice():number{
  //   let totalPrice=0;
  //   this.items.forEach(item => {
  //     totalPrice+=item.price;
  //   });
  //   return totalPrice;
  // }
  totalPrice:number=0;
  totalCount:number=0;

}