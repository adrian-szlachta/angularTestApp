import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ProductsService} from '../../../core/services/products.service';
import {Observable} from 'rxjs';
import {Product} from '../../../models/product.model';
import {Category} from '../../../models/category.model';
import {CategoryProductsService} from '../../../core/services/categoryProducts.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  products: Observable<Product[]>;

  product: Product;
  categories: Category[];



  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryProductsService,
    private toast: MatSnackBar,
    private router: Router,
  ) {
    this.products = this.productsService.getProducts();
    this.categoryService.getCategoriesProduct().subscribe(categories => this.categories = categories as Category[]);
    }

  ngOnInit() {

  }
  getCategoryName(category_id): string{
    for(let category of this.categories) {
      console.log(category_id);
      if (category_id == category.key) {
        return category.name;
      }
    }
  }
  removeProduct(index) {
    this.productsService.removeProduct(index)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onRemoveSuccess(){
    this.toast.open('Produkt został usunięty.', '', {panelClass: 'toast-success'});
  }

  private onFailure(error){
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }
  goToEditProduct(key) {
    this.router.navigate(['/dashboard/products/edit-product', key]);
  }

}
