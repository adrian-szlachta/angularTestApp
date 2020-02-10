import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = '/users';
  constructor(private db: AngularFireDatabase) { }

  getUsers(): Observable<User[]> {
    return this.db.list<User>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(user => this.assignKey(user))));
  }

  private assignKey(user) {
    return {...user.payload.val(), key: user.key};
  }

  addUser(user: User){
    return this.db.list<User>(this.API_URL).push(user);
  }

  getUser(key: string): Observable<User> {
    return this.db.object<User>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(user => this.assignKey(user)));
  }

  editUser(key: string, user: User){
    return this.db.object<User>(`${this.API_URL}/${key}`).update(user);
  }

  removeUser(key: string){
    return this.db.object<User>(`${this.API_URL}/${key}`).remove();
  }
}



