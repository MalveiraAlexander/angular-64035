import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaUnoComponent } from './pages/prueba-uno/prueba-uno.component';
import { PruebaDosComponent } from './pages/prueba-dos/prueba-dos.component';
import { WeatherService } from './services/weather.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaUnoComponent,
    PruebaDosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
