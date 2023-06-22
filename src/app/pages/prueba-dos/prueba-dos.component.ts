import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-prueba-dos',
  templateUrl: './prueba-dos.component.html',
  styleUrls: ['./prueba-dos.component.scss']
})
export class PruebaDosComponent implements OnInit {

  private nuevaForma = inject(WeatherService); // Solo Angular 16 en adelante

  constructor(private antiguo: WeatherService) { } // Versiones anteriores a Angular 16

  ngOnInit(): void {
    console.log(this.antiguo.getWeather('Posadas'));
    console.log(this.nuevaForma.getWeather('Torres'));
  }
}
