import { Injectable } from '@angular/core';
import { Cargo } from 'src/app/model/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor() { }

  getnome(): Cargo[] {
    return [{
      id: 1,
      nome: 'AUXILIAR DE SERVICOS GERAIS',
    },
    {
      id: 2,
      nome: 'AGENTE ESCOLAR',
    },
    {
      id: 3,
      nome: 'GUARDA MUNICIPAL 1a. CLASSE',
    },
    {
      id: 4,
      nome: 'AUXILIAR DE SERVIÇOS GERAIS',
    },
    {
      id: 5,
      nome: 'ASSESSOR DE GABINETE',
    },
    {
      id: 6,
      nome: 'AUXILIAR DE APOIO ADMINISTRATIVO',
    },
    {
      id: 7,
      nome: 'AUXILIAR DE SERVIÇOS GERAIS',
    },
    {
      id: 8,
      nome: 'PSICOLOGO EDUCACIONAL - 30 H',
    },
    {
      id: 9,
      nome: 'ENFERMEIRO',
    },
    {
      id: 10,
      nome: 'AUXILIAR DE SERVIÇOS GERAIS',
    },
    {
      id: 11,
      nome: 'AUXILIAR DE SERVIÇOS GERAIS',
    },
    {
      id: 12,
      nome: 'VICE-DIRETOR',
    },
    {
      id: 13,
      nome: 'AGENTE VISTOR',
    },
    {
      id: 14,
      nome: 'ENFERMEIRO',
    },
    {
      id: 15,
      nome: 'AGENTE ESCOLAR',
    }];
  }
}
