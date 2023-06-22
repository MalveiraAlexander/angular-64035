import { ChildrenDosComponent } from './pages/pagina-uno/children-dos/children-dos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PaginaUnoComponent } from './pages/pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pages/pagina-dos/pagina-dos.component';
import { PaginaErrorComponent } from './pages/pagina-error/pagina-error.component';
import { ChildrenUnoComponent } from './pages/pagina-uno/children-uno/children-uno.component';

const routes: Routes = [
  { path: 'page-one', title: 'Pagina Uno - Clase2', data: {defaultName: 'Jazmín', type: 5}, children: [
    { path: 'children-one', component: ChildrenUnoComponent, title: 'Hijo Uno - Pagina Uno - Clase2' },
    { path: 'children-two', component: ChildrenDosComponent, title: 'Hijo Dos - Pagina Uno - Clase2' },
    { path: '', component: PaginaUnoComponent }
  ] },
  { path: 'page-two', component: PaginaDosComponent, title: 'Pagina Dos - Clase2' },
  { path: 'page-two/:n', component: PaginaDosComponent, title: 'Pagina Dos - Clase2' },
  { path: 'page-two/:n/:q', component: PaginaDosComponent, title: 'Pagina Dos - Clase2' },
  { path: 'lazy-page', loadChildren: () => import('./pages/lazy-page/lazy-page.module').then(m => m.LazyPageModule) },
  { path: 'lazy-page-one', loadChildren: () => import('./pages/lazy-page-one/lazy-page-one.module').then(m => m.LazyPageOneModule) },
  { path: '', redirectTo: 'page-one', pathMatch: 'full' },
  { path: '**', component: PaginaErrorComponent, title: 'ERROR 404 - Clase2' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
