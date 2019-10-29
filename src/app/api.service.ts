import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.endpoint;
  }

  login(user) {
    const suff = '/users/login';
    return this.httpClient.post(this.endpoint + suff, user);
  }

  register(user) {
    user.role = 'profile';
    const suff = '/users/register';
    return this.httpClient.post(this.endpoint + suff, user);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }


  getUsers() {
    //let headers = new HttpHeaders();
    //headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    const suff = '/users/all';
    //return this.httpClient.get(this.endpoint + suff, { headers });
    return this.httpClient.get(this.endpoint + suff);
  }

  editUser(user) {
    const suff = '/users/update';
    return this.httpClient.post(this.endpoint + suff, user);
  }
}
