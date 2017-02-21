import * as ACTIONS from '../constants/game.constants';

export function pauseGame() {
  return { type: ACTIONS.GAME_PAUSE };
}

export function startGame() {
  return (dispatch, getState) => {
    const state = getState();

    if (state.controllers.canPlay === false) {
      setTimeout(() => dispatch(startGame()), state.controllers.speed);
    }

    dispatch({ type: ACTIONS.GAME_PROGRESS });
  };
}
