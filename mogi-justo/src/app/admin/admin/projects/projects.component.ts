import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
        descricao: 'Adição de lixeiras para degetos específicos.',
        status: 'Regular'
      }
    ]
  }

  btnSalvar() { 
    console.log('Botão Salvar');
  }

  btnEditar() { 
    console.log('Botão Editar');
  }

  btnExcluir() { 
    console.log('Botão Excluir');
  }
}
