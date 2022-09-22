import { Customer } from './Customer';
import { CartItem } from './CartItem';
export class Order{

  id!:number;
  cartItem:CartItem[]=[];
  total!:number;
  customer:Customer=new Customer;
  payment:string='';
  showChild:boolean=false;
}