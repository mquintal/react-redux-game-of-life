/**
 * Module responsible for handling all oporations needed on the game.
 *
 * @param {grid} - current grid elements
 *
 * @return {Object} - public interface
 */

export default (grid) => {
  const N_COLS = (grid[0] && grid[0].length) || 0;
  const N_ROWS = grid.length || 0;
  const DEAD_STATE = 0;
  const ALIVE_STATE = 1;

  function cellValue(x, y) {
    try {
      return grid[y][x] || DEAD_STATE;
    } catch (e) {
      return DEAD_STATE;
    }
  }

  function cellIsLive(x, y) {
    return cellValue(x, y) === ALIVE_STATE;
  }

  function getCellNeighboursPositions(x, y) {
    const neighbours = [];

    neighbours.push({ x, y: y + 1 });
    neighbours.push({ x: x + 1, y });
    neighbours.push({ x, y: y - 1 });
    neighbours.push({ x: x - 1, y });
    neighbours.push({ x: x + 1, y: y - 1 });
    neighbours.push({ x: x + 1, y: y + 1 });
    neighbours.push({ x: x - 1, y: y + 1 });
    neighbours.push({ x: x - 1, y: y - 1 });
    return neighbours;
  }

  function getNumberOfNeighbours(x, y) {
    return getCellNeighboursPositions(x, y)
      .filter(position => cellIsLive(position.x, position.y))
      .length;
  }

  function getPositionsToDieOrBorn() {
    const elToDieOrBorn = [];

    for (let row = 0; row < N_ROWS; row += 1) {
      for (let col = 0; col < N_COLS; col += 1) {
        const nNeighbours = getNumberOfNeighbours(col, row);

        // Check if it should born.
        if (nNeighbours === 3 && !cellIsLive(col, row)) {
          elToDieOrBorn.push({ x: col, y: row, state: ALIVE_STATE });

        // Check if it should die.
        } else if ((nNeighbours < 2 || nNeighbours > 3) && cellIsLive(col, row)) {
          elToDieOrBorn.push({ x: col, y: row, state: DEAD_STATE });
        }
      }
    }
    return elToDieOrBorn;
  }

  return {
    /**
     * Method responsbile for providing all elements which should be updated.
     * All elements which should die or born.
     *
     * @return {Array} - of object [{ x: number, y: number, state: DEAD_STATE | ALIVE_STATE  }, ...]
     */
    getPositionsToDieOrBorn,
  };
};
