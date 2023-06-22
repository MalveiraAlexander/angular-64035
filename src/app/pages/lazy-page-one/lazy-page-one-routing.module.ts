import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyPageOnePage } from './lazy-page-one.page';

const routes: Routes = [
  { path: '', component: LazyPageOnePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyPageOneRoutingModule { }
