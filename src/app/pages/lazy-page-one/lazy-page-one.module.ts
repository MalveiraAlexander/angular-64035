import { LazyPageOneRoutingModule } from './lazy-page-one-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LazyPageOnePage } from './lazy-page-one.page';

@NgModule({
  declarations: [
    LazyPageOnePage
  ],
  imports: [
    CommonModule,
    LazyPageOneRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LazyPageOneModule { }
