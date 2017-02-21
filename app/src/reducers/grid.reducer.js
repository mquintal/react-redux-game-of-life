import { GRID_INIT, GRID_INSERT_SHAPE, GRID_CLEAR, GRID_N_COLS, GRID_N_ROWS, GRID_TOGGLE_CELL } from '../constants/grid.constants';
import { GAME_PROGRESS } from '../constants/game.constants';
import game from '../lib/game';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GRID_INIT:
      return [...action.payload];

    case GRID_INSERT_SHAPE: {
      const localState = [...state];
      const { size, shape } = action.payload;
      const initPosition = {
        x: Math.floor(Math.random() * (GRID_N_COLS - size)),
        y: Math.floor(Math.random() * (GRID_N_ROWS - size)),
      };

      for (let shapeX = 0, gridX = initPosition.x; shapeX < size; shapeX += 1) {
        for (let shapeY = 0, gridY = initPosition.y; shapeY < size; shapeY += 1) {
          // Map form shape position to grid position.
          localState[gridY + shapeY][gridX + shapeX] = shape[shapeY][shapeX];
        }
      }
      return localState;
    }

    case GRID_CLEAR:
      return state.map(row => row.map(() => 0));

    case GAME_PROGRESS: {
      const localState = [...state];
      const gameHandler = game(localState);
      const cellsToUpdate = gameHandler.getPositionsToDieOrBorn();

      cellsToUpdate.forEach((cel) => { localState[cel.y][cel.x] = cel.state; });
      return localState;
    }

    case GRID_TOGGLE_CELL: {
      const localState = [...state];
      const { x, y } = action.payload;

      localState[x][y] = localState[x][y] === 1 ? 0 : 1;
      return localState;
    }

    default:
      return state;
  }
};

export default reducer;
