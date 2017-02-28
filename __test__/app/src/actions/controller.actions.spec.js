import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as victim from '../../../../app/src/actions/controllers.actions';
import * as controllersConst from '../../../../app/src/constants/controllers.constants';
import * as gameConst from '../../../../app/src/constants/game.constants';
import * as gridConst from '../../../../app/src/constants/grid.constants';

let store = {};

describe('controllers.actions.js', () => {
  beforeEach(() => {
    store = configureMockStore([thunk])({
      controllers: {
        canPlay: true,
        canPause: true,
        canClear: true,
        speed: 500,
      } });
  });

  describe('always', () => {
    it('should expose play as an function', () => {
      expect(victim.play).toBeDefined();
      expect(typeof victim.play).toBe('function');
    });

    it('should expose pause as an function', () => {
      expect(victim.pause).toBeDefined();
      expect(typeof victim.pause).toBe('function');
    });

    it('should expose play as an function', () => {
      expect(victim.clear).toBeDefined();
      expect(typeof victim.clear).toBe('function');
    });

    it('should expose play as an function', () => {
      expect(victim.speed).toBeDefined();
      expect(typeof victim.speed).toBe('function');
    });
  });

  describe('when play action is dispatched', () => {
    beforeEach(() => {
      store.dispatch(victim.play());
    });

    it('should dispatch CONTROLLERS_PLAY action', () => {
      expect(store.getActions()).toContainEqual({ type: controllersConst.CONTROLLERS_PLAY });
    });

    it('should dispatch GAME_PROGRESS action', () => {
      expect(store.getActions()).toContainEqual({ type: gameConst.GAME_PROGRESS });
    });
  });

  describe('when pause action is dispatched', () => {
    beforeEach(() => {
      store.dispatch(victim.pause());
    });

    it('should dispatch GAME_PAUSE action', () => {
      expect(store.getActions()).toContainEqual({ type: gameConst.GAME_PAUSE });
    });

    it('should dispatch CONTROLLERS_PAUSE actions', () => {
      expect(store.getActions()).toContainEqual({ type: controllersConst.CONTROLLERS_PAUSE });
    });
  });

  describe('when clear action is dispatched', () => {
    beforeEach(() => {
      store.dispatch(victim.clear());
    });

    it('should dispatch GRID_CLEAR action', () => {
      expect(store.getActions()).toContainEqual({ type: gridConst.GRID_CLEAR });
    });

    it('should dispatch CONTROLLERS_CLEAR action', () => {
      expect(store.getActions()).toContainEqual({ type: controllersConst.CONTROLLERS_CLEAR });
    });
  });

  describe('when speed action is dispatched', () => {
    it('should return the expected action object', () => {
      const speed = 100;

      expect(victim.speed(speed)).toEqual({
        type: controllersConst.CONTROLLERS_SPEED,
        payload: speed,
      });
    });
  });
});
