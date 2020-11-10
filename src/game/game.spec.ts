import {Game} from "./game";

describe('Game', function() {
    it('generate canvas w/ params', function() {
        const game = new Game();
        const canvas = game._generateCanvas();
        expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    });

    it('generate canvas only with width', function() {
        const canvasWidth = 300;

        const game = new Game(canvasWidth);
        const canvas = game.canvas;
        const gameWidth = canvas.getAttribute('width');
        expect(parseInt(gameWidth)).toEqual(canvasWidth);
    });

    it('generate canvas with width and height', function() {
        const canvasWidth = 300;
        const canvasHeight = 300;

        const game = new Game(canvasWidth, canvasHeight);
        const canvas = game.canvas;
        const gameWidth = canvas.getAttribute('width');
        const gameHeight = canvas.getAttribute('height');

        expect(parseInt(gameWidth)).toEqual(canvasWidth);
        expect(parseInt(gameHeight)).toEqual(canvasHeight);
    });
});