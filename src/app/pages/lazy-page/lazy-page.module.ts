import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page.component';
import { LazyPageRountingModule } from './lazy-page-rounting.module';



@NgModule({
  declarations: [
    LazyPageComponent
  ],
  imports: [
    CommonModule,
    LazyPageRountingModule
  ]
})
export class LazyPageModule { }
