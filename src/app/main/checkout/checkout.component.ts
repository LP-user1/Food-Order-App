import { Cart } from './../../Shared/models/cart';
import { CartService } from './../../services/cart.service';
import { CheckoutService } from './../../services/checkout.service';
import { Order } from './../../Shared/models/Order';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkOutForm!: FormGroup;

  paymentMeth = ['Credit Card', 'Debit card', 'COD'];
  orderPlacement: Order = new Order();

  cart!: Cart;
  constructor(
    private CO: CheckoutService,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((res) => {
      this.cart = res;
    });
    this.checkOutForm = this.formBuilder.group({
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z A-Z]+$'),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Payment: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
    });

  }
  placeOrder() {
    if (this.checkOutForm.valid) {
      this.orderPlacement.customer.customerName = this.checkOutForm.value.Name;
      this.orderPlacement.customer.customerEmail =
        this.checkOutForm.value.Email;
      this.orderPlacement.customer.customerAddress =
        this.checkOutForm.value.Address;
      this.orderPlacement.cartItem = this.cart.items;
      this.orderPlacement.total = this.cart.totalPrice;
      this.orderPlacement.payment = this.checkOutForm.value.Payment;
      this.orderPlacement.id = (Date.now() / 1000) | 0;
      this.orderPlacement.showChild = false;
      this.CO.postOrder(this.orderPlacement).subscribe((res)=>{
        if(res){
          this.checkOutForm.reset();
          alert("Your has been placed")
          location.reload();
          return res;

        }
        else{
          alert("Failed");
        }
      },(err)=>{
        alert("Server side Error! Try after sometime");
        throw new Error(err);
      })
    }
  }

  get UName(): any {
    return this.checkOutForm.get('Name');
  }
  get UEmail(): any {
    return this.checkOutForm.get('Email');
  }

  get UAddress(): any {
    return this.checkOutForm.get('Address');
  }
}
