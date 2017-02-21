import { combineReducers } from 'redux';

import controllers from './controllers.reducer';
import grid from './grid.reducer';

export default combineReducers({
  grid,
  controllers,
});
