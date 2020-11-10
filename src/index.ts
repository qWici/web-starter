/* Required for build CSS */
import './scss/style.scss';
import {Figure} from "./game/figure";
import {Game} from "./game/game";

const game = new Game(500, 500);
const block = new Figure('I', game.context);