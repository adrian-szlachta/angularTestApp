import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product.model';
import {MatSnackBar} from '@angular/material';
import {ProductsService} from '../../../core/services/products.service';
import {CategoryProductsService} from '../../../core/services/categoryProducts.service';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  formProduct: FormGroup;
  products: Product[] = [];

  productsCategories: Category[];
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryProductsService,

    private productsService: ProductsService,
    private toast: MatSnackBar,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
    this.categoryService.getCategoriesProduct().subscribe(categories => this.productsCategories = categories as Category[]);

  }
  private buildForm(){
    this.formProduct = this.formBuilder.group({
      name: ['', { validators: [Validators.required]}],
      category_id:  ['', { validators: [Validators.required]}]
    })
  }

  createProduct(){
    if(this.products.find(product => product.name == this.formProduct.value.name)){
      this.toast.open('Ta nazwa już istnieje!', '', { panelClass: 'toast-error'});
    }else{
      this.productsService.addProduct(this.formProduct.value)
        .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
  }

  private onCreatingSuccess(){
    this.toast.open('Produkt został utworzony', '', { panelClass: 'toast-success'});
    //console.log('good job');
  }

  private onCreatingFailure(error){
    //console.log('some error');
    this.toast.open(error.message, '', { panelClass: 'toast-error'});
  }

}
