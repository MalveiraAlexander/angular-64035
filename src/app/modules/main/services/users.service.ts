import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/responses/user.response';

@Injectable()
export class UsersService {

  private readonly urlApi = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.urlApi}/users`);
  }
}
