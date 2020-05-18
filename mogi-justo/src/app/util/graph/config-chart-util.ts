import { ChartTooltipItem, ChartData, ChartOptions } from 'chart.js';

export class ConfigChartUtil {
    public static createConfigBarChart(): ChartOptions {
        return {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        callback: function formatar(valor) {
                            const valorFomatado = (valor.toLocaleString());
                            return `R$: ${valorFomatado}`;
                        }
                    }
                }]
            },
            tooltips: {
                borderWidth: 1,
                caretPadding: 15,
                displayColors: false,
                enabled: true,
                intersect: true,
                mode: 'x',
                titleFontColor: '#999',
                titleMarginBottom: 10,
                xPadding: 15,
                yPadding: 15,
                callbacks: {
                    label: function formatar(tooltipItem: ChartTooltipItem, data: ChartData) {
                        const valor: number = +tooltipItem.value;
                        return `Salário: R$ ${valor.toLocaleString()}`;
                    }
                }
            }
        };
    }
}
