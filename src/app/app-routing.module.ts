import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {UsersComponent} from "./users/users.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {AuthGuard} from "./core/services/auth.guard";
import {UserRoleComponent} from './users/user-role/user-role.component';
import {WebsiteIsComingComponent} from './core/website-is-coming/website-is-coming.component';
import {EditPermissionsComponent} from './users/edit-permissions/edit-permissions.component';
import {ProductsComponent} from './dishes/products/products.component';
import {CategoriesComponent} from './dishes/products/categories/categories.component';
import {CategoryEditComponent} from './dishes/products/categories/category-edit/category-edit.component';
import {EditProductComponent} from './dishes/products/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '',
        component: WebsiteIsComingComponent
      },
      { path: 'products',
        component: ProductsComponent
      },
      { path: 'products/edit-product/:key',
        component: EditProductComponent
      },
      { path: 'products/categories',
        component: CategoriesComponent
      },
      { path: 'products/categories/edit-category/:key',
        component: CategoryEditComponent
      },
      { path: 'users',
        component: UsersComponent
      },
      { path: 'users/role',
        component: UserRoleComponent
      },
      { path: 'users/edit-user/:key',
        component: EditUserComponent
      },
      { path: 'website-is-coming',
        component: WebsiteIsComingComponent
      },
      { path: 'users/edit-permissions/:key',
        component: EditPermissionsComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
