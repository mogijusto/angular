export class Color {
    private getListColor = ['4577FF', '6EFF8B', 'FFAB7A', '#00D3FF', '#FF1E00', '#0DFF5B', '#0D50FF', '#710CE8', '#E8AF0C', 
    '#FFFD00', '#5428FF', '#50CC14', '#5428FF', '#261273', '#73122F', '#980ACC', '#41CCBE', '#73314C'];


    public getRandomColor(): string[] {
        return this.shuffle(this.getListColor);
    }

    private shuffle(list: string[]) {
        return list.reduce((p, n) => {
            const size = p.length;
            const index = Math.trunc(Math.random() * (size - 1));
            p.splice(index, 0, n);
            return p;
        }, []);
    }
}
