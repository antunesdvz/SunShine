import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey  ='1bb8d5c6b442582baf9da15df569f1fe';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor() { }

  buscarInfoClimaCidadeAtual () {
    const urlCompleta = '?q={city name}&appid=' + this.apiKey;
  }
}