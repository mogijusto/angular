export class LabelData {

    private labels: string[] = [];
    private datas: number[] = [];
    constructor(valores: any, labelNome: string, valorNome: string) {
        valores.forEach(obj => {
            this.labels.push(obj[labelNome]);
            this.datas.push(obj[valorNome]);
        });
    }

    getLabels(): string[] {
        return this.labels;
    }

    getValores(): number[] {
        return this.datas;
    }
}
