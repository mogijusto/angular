import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor() { }

  getServidores(): any {
    return [{
      rgf: 19675,
      nome: ' LUCIANA DA SILVA',
      cargo: 'AUXILIAR DE SERVICOS GERAIS',
      rendimentos: 1715.26
    },
    {
      rgf: 17499,
      nome: 'AARON ANDERSON  A.FONTELES',
      cargo: 'AGENTE ESCOLAR',
      rendimentos: 2061.72
    },
    {
      rgf: 11961,
      nome: 'ABENONIAS DA CONCEICAO SILVA',
      cargo: 'GUARDA MUNICIPAL 1a. CLASSE',
      rendimentos: 5536.95
    },
    {
      rgf: 14516,
      nome: 'ABILIO BENEDITO DA CRUZ',
      cargo: 'AUXILIAR DE SERVIÇOS GERAIS',
      rendimentos: 1869.46
    },
    {
      rgf: 19943,
      nome: 'ABRAAO BETIM HERMENEGILDO',
      cargo: 'ASSESSOR DE GABINETE',
      rendimentos: 4900.01
    },
    {
      rgf: 16407,
      nome: 'ACACIO ALVES FILHO',
      cargo: 'AUXILIAR DE APOIO ADMINISTRATIVO',
      rendimentos: 6214.45
    },
    {
      rgf: 8977,
      nome: 'ACACIO MARTINS OLIVEIRA',
      cargo: 'AUXILIAR DE SERVIÇOS GERAIS',
      rendimentos: 2462.86
    },
    {
      rgf: 19836,
      nome: 'ADA VIVIAN RODRIGUES',
      cargo: 'PSICOLOGO EDUCACIONAL - 30 H',
      rendimentos: 4587.98
    },
    {
      rgf: 10636,
      nome: 'ADALBERTO LOPES MACHADO',
      cargo: 'ENFERMEIRO',
      rendimentos: 6884.98
    },
    {
      rgf: 14617,
      nome: 'ADALBERTO LUIZ DONIZETI SILVA',
      cargo: 'AUXILIAR DE SERVIÇOS GERAIS',
      rendimentos: 1869.46
    },
    {
      rgf: 14139,
      nome: 'ADAM LUIZ FERREIRA',
      cargo: 'AUXILIAR DE SERVIÇOS GERAIS',
      rendimentos: 1846.41
    },
    {
      rgf: 16928,
      nome: 'ADAMARIS APAREC S.BRANCO',
      cargo: 'VICE-DIRETOR',
      rendimentos: 7499.07
    },
    {
      rgf: 14961,
      nome: 'ADAO VIEIRA',
      cargo: 'AGENTE VISTOR',
      rendimentos: 11977.65
    },
    {
      rgf: 10730,
      nome: 'ADELAIDE APARECIDA DIAS',
      cargo: 'ENFERMEIRO',
      rendimentos: 7718.95
    },
    {
      rgf: 14992,
      nome: 'ADELAIDE HELENA  Z.MIRANDA',
      cargo: 'AGENTE ESCOLAR',
      rendimentos: 2113.68
    }];
  }
}
