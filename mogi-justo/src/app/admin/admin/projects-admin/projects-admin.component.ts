import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto';


@Component({
  selector: 'app-projects-admin',
  templateUrl: './projects-admin.component.html',
  styleUrls: ['./projects-admin.component.scss']
})
export class ProjectsAdminComponent implements OnInit {

  Projetos: Projeto[];

  constructor() { }

  ngOnInit(): void {
    this.Projetos = [
      {
        nome: 'Xo Corona',
        descricao: 'Campanha de prevenção contra o Covid-19.',
        status: 'Bom'
      },
      {
        nome: 'Reforma do Código Florestal',
        descricao: 'Remoção de restrições antigas.',
        status: 'Péssimo'
      },
      {
        nome: 'Implementação de lixeiras na Avenida Cívica',
        descricao: 'Adição de lixeira para degetos específicos.',
        status: 'Regular'
      }
    ]
  }

}
