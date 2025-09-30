import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherResponse } from '../models/wheater-response.model';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private apiKey  ='1bb8d5c6b442582baf9da15df569f1fe';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);

constructor() { }

  buscarInfoClimaCidadeAtual () {
    const urlCompleta =
      this.apiUrl + '?q=Dois%20Vizinhos&appid='
      + this.apiKey + '&lang=pt_br&units=metric';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}