import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../core/services/users.service";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  user: User;

  roles = [
    { label: '1.Manager', value: '1'},
    { label: '2.Kucharz', value: '2'},
    { label: '3.Kelner', value: '3'},
    { label: '4.Dostawca', value: '4'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: MatSnackBar,
) { }

  ngOnInit() {
    this.buildForm();
    const key = this.route.snapshot.params['key'];
    this.usersService.getUser(key)
      .subscribe(user => {
        this.user = user;
        this.form.get('email').setValue(this.user.email);
        this.form.get('password').setValue(this.user.password);
        this.form.get('role').setValue(this.user.role);
      });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', { validators: [Validators.required,Validators.email]}],
      password:  ['', { validators: [Validators.required, Validators.minLength(4)]}],
      role:  ['', { validators: [Validators.required]}]
    })
  }

  editUser(key){
    this.usersService.editUser(key, this.form.value)
      .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  private onEditSuccess(){
    this.router.navigate(['/dashboard/users']);
    this.toast.open('Dane zostały zaktualizowane', '', {panelClass: 'toast-success'});
  }

  private onFailure(error){
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

}

