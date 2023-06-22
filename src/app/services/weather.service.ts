import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  constructor() { }


  getWeather(city: string) {
    console.log('getWeather');

    return {
      city: city,
      temperature: 10,
      description: 'Otoño',
    }
  }
}
