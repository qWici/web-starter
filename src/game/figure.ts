type FigureType = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export class Figure {
    type: FigureType;
    context: CanvasRenderingContext2D;
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    scaleFactor: number = 1;

    constructor(type: FigureType, context: CanvasRenderingContext2D) {
        this.type = type;
        this.context = context;
        this.render();
    }

    render() {
        this.setup();
        this.context.fillStyle = "red";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    setup() {
        switch (this.type) {
            case "I":
                this.width = 30;
                this.height = 100;
                break;
            default:
                break;
        }
    }
}