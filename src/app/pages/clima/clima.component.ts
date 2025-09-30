import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OpenWeatherService } from "../../services/openweather.service";
import { WeatherResponse } from "../../models/wheater-response.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, of } from "rxjs";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
executarAcoes() {
  this.moverParaTelaDePesquisa();
}


  navigator = inject(Router);
  openWeather = inject(OpenWeatherService);
  
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeather.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError(err => {
        console.error("Erro ao buscar dados do clima", err)
        return of(null);
      })
    ),
    {initialValue: null}
  );

  constructor() { }

  ngOnInit() {
    this.openWeather.buscarInfoClimaCidadeAtual();
  }

  moverParaTelaDePesquisa() {
    this.navigator.navigate(['/pesquisa']);
  }

}
