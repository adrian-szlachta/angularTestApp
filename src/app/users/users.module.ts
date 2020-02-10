import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "../../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import { EditUserComponent } from './edit-user/edit-user.component';
import {RouterModule} from "@angular/router";
import { UserRoleComponent } from './user-role/user-role.component';
import { EditPermissionsComponent } from './edit-permissions/edit-permissions.component';


@NgModule({
  declarations: [UsersComponent, AddUserComponent, ListOfUsersComponent, EditUserComponent, UserRoleComponent, EditPermissionsComponent],
  exports: [AddUserComponent],
  providers: [AngularFirestore],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-list-of-users'),
    AngularFireDatabaseModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [AddUserComponent],
})
export class UsersModule { }
