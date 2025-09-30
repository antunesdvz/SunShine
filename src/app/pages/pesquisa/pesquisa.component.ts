import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OpenWeatherService } from "../../services/openweather.service";

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PesquisaComponent implements OnInit {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);

  ngOnInit() {
    this.openWeatherService.buscarInfoClimaCidadeAtual();
  }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }

}