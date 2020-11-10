export class Game implements IGame {
    /**
     *  Canvas element
     */
    canvas: HTMLElementTagNameMap['canvas'];

    /**
     * Canvas width
     */
    private readonly width: number;

    /**
     * Canvas height
     */
    private readonly height: number;

    /**
     * Canvas 2D context
     */
    context: CanvasRenderingContext2D;

    constructor(width: number = 100, height: number = 100) {
        this.width = width;
        this.height = height;

        this.canvas = this._generateCanvas();
        this.context = this.canvas.getContext('2d');
        this._renderCanvas();
    }

    _generateCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;

        return canvas;
    }

    _renderCanvas() {
        return !!document.body.appendChild(this.canvas);
    }
}

interface IGame {
    /* Generate canvas HTML element */
    _generateCanvas(): HTMLElementTagNameMap['canvas'];

    /* Append canvas to body */
    _renderCanvas(): boolean;
}