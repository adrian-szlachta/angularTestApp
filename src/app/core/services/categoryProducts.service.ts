import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category} from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {
  private API_URL = '/product-categories';
  constructor(private db: AngularFireDatabase) { }

  getCategoriesProduct(): Observable<Category[]> {
    return this.db.list<Category>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(categoryProduct => this.assignKey(categoryProduct))));
  }


  private assignKey(categoryProduct) {
    return {...categoryProduct.payload.val(), key: categoryProduct.key};
  }

  addCategoryProduct(categoryProduct: Category){
    return this.db.list<Category>(this.API_URL).push(categoryProduct);
  }

  getCategoryProduct(key: string): Observable<Category> {
    return this.db.object<Category>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(categoryProduct => this.assignKey(categoryProduct)));
  }

  editCategoryProduct(key: string, categoryProduct: Category){
    return this.db.object<Category>(`${this.API_URL}/${key}`).update(categoryProduct);
  }

  removeCategoryProduct(key: string){
    return this.db.object<Category>(`${this.API_URL}/${key}`).remove();
  }
}
