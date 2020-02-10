import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../models/category.model';
import {CategoryProductsService} from '../../../core/services/categoryProducts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/product.model';
import {debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Input()product: Product;
  productsCategories: Category[];
  formProduct: FormGroup;
  valueForm: Observable<Product>;


  constructor(
    private categoryService: CategoryProductsService,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toast: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef

) {



  }

ngOnInit() {
    this.buildForm();
  this.cd.detectChanges();
  this.categoryService.getCategoriesProduct().subscribe(categories => this.productsCategories = categories as Category[]);
  const key = this.route.snapshot.params['key'];
  this.productsService.getProduct(key)
    .subscribe(product => {this.product = product;
      this.formProduct.get('category_id').setValue(this.product.category_id);
      this.formProduct.get('name').setValue(this.product.name);

    });

}

  editProduct(key) {

    this.productsService.editProduct(key, this.formProduct.value)
      .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }


  private buildForm() {

    this.formProduct = this.formBuilder.group({

      name:  [''],
      category_id:  ['']

    });


  }


  private onEditSuccess() {
    this.router.navigate(['/dashboard/products/']);
    this.toast.open('Dane zostały zaktualizowane', '', {panelClass: 'toast-success'});
  }

  private onFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

}
