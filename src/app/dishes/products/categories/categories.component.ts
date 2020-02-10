import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../../models/category.model';
import {CategoryProductsService} from '../../../core/services/categoryProducts.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Observable<Category[]>;
  category: Category;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoryProductsService,
    private toast: MatSnackBar,
    private router: Router,
  ) {
    this.categories = this.categoriesService.getCategoriesProduct();
  }

  createCategory(){
    this.categoriesService.addCategoryProduct(this.categoryForm.value)
        .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  removeCategory(index) {
    this.categoriesService.removeCategoryProduct(index)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onRemoveSuccess() {
    this.toast.open('Kategoria została usunięta.', '', {panelClass: 'toast-success'});
  }

  private onFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

  private onCreatingSuccess(){
    this.toast.open('Kategoria został utworzony', '', { panelClass: 'toast-success'});
  }

  private onCreatingFailure(error){
    this.toast.open(error.message, '', { panelClass: 'toast-error'});
  }

  goToEditCategory(key) {
    this.router.navigate(['/dashboard/products/categories/edit-category', key]);
  }
  private buildForm() {
    this.categoryForm = this.formBuilder.group({
      name:  ['', { validators: [Validators.required, Validators.minLength(4)]}]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

}
