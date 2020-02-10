import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../../core/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Category} from '../../../../models/category.model';
import {CategoryProductsService} from '../../../../core/services/categoryProducts.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;


  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoryProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: MatSnackBar,
  ) { }

  ngOnInit() {
    this.buildForm();
    const key = this.route.snapshot.params['key'];
    this.categoriesService.getCategoryProduct(key)
      .subscribe(category => {this.category = category;
        this.categoryForm.get('naem').setValue(this.category.name);
      });
  }

  private buildForm() {
    this.categoryForm = this.formBuilder.group({
      name:  ['', { validators: [Validators.required, Validators.minLength(4)]}]
    });
  }

  editCategory(key){
    this.categoriesService.editCategoryProduct(key, this.categoryForm.value)
      .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  private onEditSuccess(){
    this.router.navigate(['/dashboard/products/categories']);
    this.toast.open('Dane zostały zaktualizowane', '', {panelClass: 'toast-success'});
  }

  private onFailure(error){
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

}
