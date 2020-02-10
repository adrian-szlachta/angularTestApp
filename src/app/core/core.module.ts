import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {WebsiteIsComingComponent} from './website-is-coming/website-is-coming.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, MenuComponent, PageNotFoundComponent, WebsiteIsComingComponent],
  exports: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class CoreModule { }
