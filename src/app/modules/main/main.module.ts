import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { MainRountingModule } from './main-rounting.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RolesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRountingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
