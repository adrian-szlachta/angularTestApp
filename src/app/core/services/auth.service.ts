import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserInfo} from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}
@Injectable({providedIn: 'root'})
export class AuthService{

  private userData: UserInfo;
  readonly authState$ = this.fireAuth.authState;
  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: Credentials){
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }

  logout(){
    return this.fireAuth.auth.signOut();
  }

  isLoggedIn(){
    return !!this.userData;
  }

  get user(){
    return this.userData;
  }

}
