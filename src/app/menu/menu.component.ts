import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  status: boolean = false;
  user = this.authService.user;
  constructor(
    private authService: AuthService,
    private router: Router

  ) {}

  logout(){
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }

  ngOnInit() {
  }


  onClickMe() {
    this.status = !this.status;
  }


}
