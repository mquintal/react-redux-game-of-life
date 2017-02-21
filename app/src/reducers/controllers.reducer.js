import { CONTROLLERS_PLAY, CONTROLLERS_PAUSE, CONTROLLERS_CLEAR, CONTROLLERS_SPEED } from '../constants/controllers.constants';

const initialState = {
  canPlay: true,
  canPause: true,
  canClear: true,
  speed: 500,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTROLLERS_PLAY:
      return { ...state, canPlay: false, canPause: true, canClear: true };

    case CONTROLLERS_PAUSE:
      return { ...state, canPause: false, canPlay: true, canClear: true };

    case CONTROLLERS_CLEAR:
      return { ...state, canClear: true, canPlay: true, canPause: true };

    case CONTROLLERS_SPEED:
      return { ...state, speed: action.payload };

    default:
      return state;
  }
};

export default reducer;
