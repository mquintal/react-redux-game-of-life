import {
  GRID_INIT,
  GRID_INSERT_SHAPE,
  GRID_CLEAR,
  GRID_N_COLS,
  GRID_N_ROWS,
  GRID_TOGGLE_CELL,
} from '../constants/grid.constants';
import shapes from '../constants/shapes.constants';

export function init() {
  const rows = Array(GRID_N_ROWS).fill(0);
  const cols = Array(GRID_N_COLS).fill(0);

  return {
    type: GRID_INIT,
    payload: rows.map(() => [...cols]),
  };
}

export function insertShape(shapeIndex) {
  return {
    type: GRID_INSERT_SHAPE,
    payload: shapes[shapeIndex],
  };
}

export function clearGrid() {
  return {
    type: GRID_CLEAR,
  };
}

export function toggleCell(x, y) {
  return {
    type: GRID_TOGGLE_CELL,
    payload: { x, y },
  };
}
