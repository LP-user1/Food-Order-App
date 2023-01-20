import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Shared/models/Order';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkOutUrl = 'http://localhost:3000/';
  constructor(private Http: HttpClient) {}

  getOrder(): Observable<Order[]> {
    return this.Http.get<any>(this.checkOutUrl + 'Orders');
  }

  postOrder(data: Order) {
    return this.Http.post<any>(this.checkOutUrl + 'Orders', data).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
