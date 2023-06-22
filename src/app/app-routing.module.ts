import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from "./pages/reactive-form/reactive-form.component";
import { TemplateFormComponent } from './pages/template-form/template-form.component';

const routes: Routes = [
  {path: 'reactivo', component: ReactiveFormComponent },
  {path: 'template', component: TemplateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
