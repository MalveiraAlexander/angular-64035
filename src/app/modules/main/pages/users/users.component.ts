import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserResponse } from '../../models/responses/user.response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: UserResponse[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.warn(err);
        alert("Error del servidor")
      },
      complete: () => {
        console.info('Completado');
      }
    })
  }

}
