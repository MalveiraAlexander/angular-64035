import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaUnoComponent } from './pages/prueba-uno/prueba-uno.component';
import { PruebaDosComponent } from './pages/prueba-dos/prueba-dos.component';

const routes: Routes = [
  { path: '', component: PruebaUnoComponent },
  { path: 'dos', component: PruebaDosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
