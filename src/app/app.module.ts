import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaUnoComponent } from './pages/pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pages/pagina-dos/pagina-dos.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaErrorComponent } from './pages/pagina-error/pagina-error.component';
import { ChildrenUnoComponent } from './pages/pagina-uno/children-uno/children-uno.component';
import { ChildrenDosComponent } from './pages/pagina-uno/children-dos/children-dos.component';
import { LazyPageComponent } from './pages/lazy-page/lazy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaUnoComponent,
    PaginaDosComponent,
    HeaderComponent,
    PaginaErrorComponent,
    ChildrenUnoComponent,
    ChildrenDosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
