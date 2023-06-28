import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/requests/login.request';

@Injectable()
export class AuthService {

  private readonly API_URL = 'https://localhost:44323/api/';
  constructor(private http: HttpClient) { }

  login(data: LoginRequest) {
    return this.http.post(`${this.API_URL}auth/login`, data);
  }



  getIp() {
    return this.http.get('https://api.ipify.org/?format=json');
  }

}
