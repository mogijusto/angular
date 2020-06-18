export class Servidor {
    // Campos baseado no servico do http://www.licitacao.pmmc.com.br/Transparencia/vencimentos2 | GET
    rgf: number;
    nome: string;
    cargo: string;
    rendimentos: number;

    static anyToServidor(servidor: any): Servidor {
        const servidorTemp = new Servidor();
        servidorTemp.cargo = servidor.cargo;
        servidorTemp.nome = servidor.nome;
        servidorTemp.rendimentos = +servidor.rendimentos.replace('.', '').replace(',', '.');
        servidorTemp.rgf = +servidor.rgf;
        return servidorTemp;
    }
}
