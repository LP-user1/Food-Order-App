import { CheckoutComponent } from './main/checkout/checkout.component';
import { ShowFoodComponent } from './main/show-food/show-food.component';
import { CartComponent } from './main/cart/cart.component';
import { OrderHistoryComponent } from './main/order-history/order-history.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundPageComponent } from './main/not-found-page/not-found-page.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ProductsComponent } from './main/products/products.component';
import { ServiceComponent } from './main/service/service.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tags', component: HomeComponent },
  { path: 'food/:id', component: ShowFoodComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
