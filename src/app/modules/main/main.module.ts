import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { MainRountingModule } from './main-rounting.module';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    RolesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MainRountingModule,
    HttpClientModule
  ]
})
export class MainModule { }
