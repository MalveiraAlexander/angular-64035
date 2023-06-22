import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRountingModule } from './auth-rounting.module';



@NgModule({
  declarations: [
    LoginComponent,
    RecoverPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRountingModule
  ]
})
export class AuthModule { }
