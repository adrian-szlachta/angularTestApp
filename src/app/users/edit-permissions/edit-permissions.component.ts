import { Component, OnInit } from '@angular/core';
import {Permissions} from '../../models/permissions.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PermissionsService} from '../../core/services/permissions.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-permissions.component.html',
  styleUrls: ['./edit-permissions.component.scss']
})

export class EditPermissionsComponent implements OnInit {
  color = 'accent';
  permission: Permissions;

  changeDashboardValue(i) {
    if (i === 1) {
      this.permission.dashboard = 0;
    } else {
      this.permission.dashboard = 1;
    }
  }

  changeMarketingValue(i) {
    if (i === 1) {
      this.permission.marketing = 0;
    } else {
      this.permission.marketing = 1;
    }
  }

  changeKitchenValue(i) {
    if (i === 1) {
      this.permission.kitchen = 0;
    } else {
      this.permission.kitchen = 1;
    }
  }

  changeReservationsValue(i) {
    if (i === 1) {
      this.permission.reservations = 0;
    } else {
      this.permission.reservations = 1;
    }
  }

  changeTablesValue(i) {
    if (i === 1) {
      this.permission.tables = 0;
    } else {
      this.permission.tables = 1;
    }
  }

  changeSettingsValue(i) {
    if (i === 1) {
      this.permission.settings = 0;
    } else {
      this.permission.settings = 1;
    }
  }

  changeCustomersValue(i) {
    if (i === 1) {
      this.permission.customers = 0;
    } else {
      this.permission.customers = 1;
    }
  }

  changeOrdersValue(i) {
    if (i === 1) {
      this.permission.orders = 0;
    } else {
      this.permission.orders = 1;
    }
  }

  changeProductsValue(i) {
    if (i === 1) {
      this.permission.products = 0;
    } else {
      this.permission.products = 1;
    }
  }

  constructor(
    private permissionsService: PermissionsService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: MatSnackBar,
  ) { }

  ngOnInit() {
    /*console.log(key);*/
    const key = this.route.snapshot.params['key'];
    this.permissionsService.getRolePermissions(key)
      .subscribe(permission => this.permission = permission);
  }

  editPermission(key){
    this.permissionsService.editPermissions(key, this.permission)
      .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  private onEditSuccess(){
    this.router.navigate(['/dashboard/users/role']);
    this.toast.open('Dane zostały zaktualizowane', '', {panelClass: 'toast-success'});
  }

  private onFailure(error){
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }
}
