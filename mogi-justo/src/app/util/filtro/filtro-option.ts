import { Options } from 'ng5-slider';

export class FiltroOption {
    public static createOption(valueMax: number): Options {
        return {
            floor: 0,
            ceil: valueMax,
            showSelectionBarEnd: true,
            translate: (value: number): string => {
                return 'R$' + value.toLocaleString();
            }
        };
    }
}
