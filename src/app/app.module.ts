import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {MaterialModule} from "./material/material.module";
import {CoreModule} from "./core/core.module";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsersModule} from "./users/users.module";
import { ProductsComponent } from './dishes/products/products.component';
import {ProductsModule} from './dishes/products/products.module';
import { OrdersComponent } from './orders/orders.component';
import { DishesComponent } from './dishes/dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    DishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    UsersModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
