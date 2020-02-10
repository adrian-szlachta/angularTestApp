import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = '/products';
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Observable<Product[]> {
    return this.db.list<Product>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(product => this.assignKey(product))));
  }

  private assignKey(product) {
    return {...product.payload.val(), key: product.key};
  }

  addProduct(product: Product){
    return this.db.list<Product>(this.API_URL).push(product);
  }

  getProduct(key: string): Observable<Product> {
    return this.db.object<Product>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(product => this.assignKey(product)));
  }

  editProduct(key: string, product: Product){
    return this.db.object<Product>(`${this.API_URL}/${key}`).update(product);
  }

  removeProduct(key: string){
    return this.db.object<Product>(`${this.API_URL}/${key}`).remove();
  }
}



