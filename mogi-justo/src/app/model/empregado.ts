import { Rendimento } from './rendimento';
import { Desconto } from './desconto';
import { Total } from './total';
import { Outro } from './outro';

export class Empregado {
    public id: number;
    public nome: string;
    public cargo: string;
    public regime: string;
    public totais: Total[];
    public outros: Outro[];
    public referencia: string;
    public descontos: Desconto[];
    public rendimentos: Rendimento[];
}
