import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../core/services/users.service";
import {MatSnackBar} from "@angular/material";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  users: User[] = [];

  roles = [
    { label: '1.Manager', value: '1'},
    { label: '2.Kucharz', value: '2'},
    { label: '3.Kelner', value: '3'},
    { label: '4.Dostawca', value: '4'},
  ];
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private toast: MatSnackBar,
) {  }

  ngOnInit() {
    this.buildForm();
    this.usersService.getUsers()
      .subscribe(user => this.users = user);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', { validators: [Validators.required,Validators.email]}],
      password:  ['', { validators: [Validators.required, Validators.minLength(4)]}],
      role:  ['', { validators: [Validators.required]}]
    })
  }

  createUser(){
    if(this.users.find(user => user.email == this.form.value.email)){
      this.toast.open('Użytkownik o podanym adresie email już istnieje!', '', { panelClass: 'toast-error'});
    }else{
      this.usersService.addUser(this.form.value)
        .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
  }

  private onCreatingSuccess(){
    this.toast.open('Użytkownik został utworzony', '', { panelClass: 'toast-success'});
    //console.log('good job');
  }

  private onCreatingFailure(error){
    //console.log('some error');
    this.toast.open(error.message, '', { panelClass: 'toast-error'});
  }

}
