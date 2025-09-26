import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  standalone: true,
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClimaComponent implements OnInit {

  roteador = inject(Router);
  imageUrl: string = '';

  ngOnInit(): void {

  }

  buscarClima() {
    this.roteador.navigate(['/pesquisa']);
  }



  executarAcoes() {   
  this.buscarClima();
}

}
