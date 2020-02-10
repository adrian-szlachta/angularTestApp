import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {MaterialModule} from '../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [AddProductComponent, ListOfProductsComponent, CategoriesComponent, CategoryEditComponent, EditProductComponent],
  exports: [AddProductComponent, ListOfProductsComponent],
  providers: [AngularFirestore],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-list-of-products'),
    AngularFireDatabaseModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [AddProductComponent],
})
export class ProductsModule { }
