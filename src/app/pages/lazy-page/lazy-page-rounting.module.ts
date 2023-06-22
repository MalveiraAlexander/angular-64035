import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyPageComponent } from './lazy-page.component';

const routes: Routes = [
  { path: '', component: LazyPageComponent, title: 'Lazy Page - Clase2' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class LazyPageRountingModule { }
