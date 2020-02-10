import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {UsersService} from '../../core/services/users.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})

export class ListOfUsersComponent implements OnInit {

  users: Observable<User[]>;
  user: User;

  constructor(
    private usersService: UsersService,
    private toast: MatSnackBar,
    private router: Router,
  ) {
    this.users = this.usersService.getUsers();
  }

  nameOfRole(index) {
    if(index == 1){
      return 'Manager';
    } else if(index == 2){
      return 'Kucharz';
    } else if(index == 3){
      return 'Kelner';
    } else if(index == 4){
      return 'Dostawca';
    }
  }

  removeUser(index) {
    this.usersService.removeUser(index)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onRemoveSuccess(){
    this.toast.open('Użytkownik został usunięty.', '', {panelClass: 'toast-success'});
  }

  private onFailure(error){
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

  goToEditUser(key){
    this.router.navigate(['/dashboard/users/edit-user', key]);
  }

  ngOnInit() {
  }

}
