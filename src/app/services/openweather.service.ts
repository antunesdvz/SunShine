import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey  ='1bb8d5c6b442582baf9da15df569f1fe';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor() { }

  buscarInfoClimaCidadeAtual () {
    const urlCompleta =
      this.apiUrl + '?q=Dois Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';


    console.log(urlCompleta);
  }
}