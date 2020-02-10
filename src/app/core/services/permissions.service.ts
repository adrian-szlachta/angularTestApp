import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Permissions} from '../../models/permissions.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private API_URL = '/permissions';
  constructor(private db: AngularFireDatabase) { }

  private assignKey(permissions) {
    return {...permissions.payload.val(), key: permissions.key};
  }

  getRolePermissions(key: string): Observable<Permissions> {
    return this.db.object<Permissions>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(permissions => this.assignKey(permissions)));
  }

  editPermissions(key: string, permissions: Permissions){
    return this.db.object<Permissions>(`${this.API_URL}/${key}`).update(permissions);
  }


}



