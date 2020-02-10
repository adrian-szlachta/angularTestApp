import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserRole} from '../../models/user-role.model';

@Injectable({
  providedIn: 'root'
})

export class UserRoleService {
  private API_URL = '/roles';
  constructor(private db: AngularFireDatabase) { }

  getUserRole(): Observable<UserRole[]> {
    return this.db.list<UserRole>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(userRole => this.assignKey(userRole))));
  }

  private assignKey(userRole) {
    return {...userRole.payload.val(), key: userRole.key};
  }

}



