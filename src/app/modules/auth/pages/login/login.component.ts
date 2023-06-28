import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/requests/login.request';
import { AuthService } from '../../services/auth.service';
import { StorageService } from 'src/app/modules/shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService, private storage: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    let loginRequest: LoginRequest = {
      username: this.form.value.username,
      password: btoa(this.form.value.password),
      cookie: 'cookie',
      deviceName: 'deviceName',
      isApp: false,
      publicIP: null
    }

    this.auth.getIp().subscribe({
      next: (data) => {
        loginRequest.publicIP = data['ip'];
        this.auth.login(loginRequest).subscribe({
          next: (data) => {
            console.log(data);
            this.storage.setDataLogin(data);
          },
          error: (err) => {
            console.warn(err);
          },
          complete: () => {
            this.router.navigate(['/main']);
            console.info('Completado');
          }
        });
      },
      error: (err) => {
        console.warn(err);
      }
    });
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
}
