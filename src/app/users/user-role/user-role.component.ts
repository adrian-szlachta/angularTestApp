import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserRole} from '../../models/user-role.model';
import {Router} from '@angular/router';
import {UserRoleService} from '../../core/services/user-role.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})

export class UserRoleComponent implements OnInit {
  roles: Observable<UserRole[]>;

  constructor(
    private userRoleService: UserRoleService,
    private router: Router,

) {
      this.roles = this.userRoleService.getUserRole();
  }

  goToEditRole(key){
    this.router.navigate(['/dashboard/users/edit-permissions', key]);
  }

  ngOnInit() {
  }

}
