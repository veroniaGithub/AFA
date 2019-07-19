import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserSession {
  sessionUser : any;
  constructor(public http: Http) {
    this.sessionUser = [];
  }
  addUser(user){
    if (this.sessionUser.length > 0) {
        this.sessionUser = [];
    }
    this.sessionUser.push(user);
  }
  deleteUser() {
      this.sessionUser = [];
  }

  getUser() {
      if (this.sessionUser.length > 0) {
          return this.sessionUser[this.sessionUser.length - 1];
      }
      else  return false;
  }

}
