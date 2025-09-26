import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PesquisaComponent implements OnInit {

  imageUrl: string = '';

  ngOnInit(): void {

  }

  }

