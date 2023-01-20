import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './main/home/home.component';
import { ServiceComponent } from './main/service/service.component';
import { OrderHistoryComponent } from './main/order-history/order-history.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ProductsComponent } from './main/products/products.component';
import { NotFoundPageComponent } from './main/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './main/cart/cart.component';
import { HttpClientModule } from '@angular/common/http'
import {RatingModule} from 'ng-starrating';
import { SearchComponent } from './main/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowFoodComponent } from './main/show-food/show-food.component';
import { TagsComponent } from './main/tags/tags.component';
import { CheckoutComponent } from './main/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ServiceComponent,
    OrderHistoryComponent,
    MessagesComponent,
    ProductsComponent,
    NotFoundPageComponent,
    CartComponent,
    SearchComponent,
    ShowFoodComponent,
    TagsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
