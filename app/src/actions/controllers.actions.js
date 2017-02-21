import * as ACTIONS from '../constants/controllers.constants';
import { startGame, pauseGame } from './game.actions';
import { clearGrid } from './grid.actions';

export function play() {
  return (dispatch) => {
    dispatch({ type: ACTIONS.CONTROLLERS_PLAY });
    dispatch(startGame());
  };
}

export function pause() {
  return (dispatch) => {
    dispatch(pauseGame());
    dispatch({ type: ACTIONS.CONTROLLERS_PAUSE });
  };
}

export function clear() {
  return (dispatch) => {
    dispatch(clearGrid());
    dispatch({ type: ACTIONS.CONTROLLERS_CLEAR });
  };
}

export function speed(value) {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.CONTROLLERS_SPEED,
      payload: value,
    });
  };
}
