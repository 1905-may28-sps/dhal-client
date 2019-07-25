import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.userUrl;
  reqOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };


  constructor( private http: HttpClient) {}

  public  addUser( user: User) {
    console.log(this.url);
    return this.http.post<User>(`${this.url}/user`, user, this.reqOptions);
  }

  public logIn(user: User) {
    return this.http.post<User>(`${this.url}/users/username=${user.username}`, user, this.reqOptions );
  }
}
