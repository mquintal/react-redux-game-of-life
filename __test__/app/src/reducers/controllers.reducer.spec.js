import victim from '../../../../app/src/reducers/controllers.reducer';
import * as actions from '../../../../app/src/constants/controllers.constants';

const initialState = {
  canPlay: true,
  canPause: true,
  canClear: true,
  speed: 500,
};


describe('controllers.reducer.spec.js', () => {
  it('should have the expected initial state', () => {
    window.expect(victim(
      undefined, {
        type: 'some-action-which-does-not-exist',
      },
    )).toEqual(initialState);
  });

  describe('when play action is triggered', () => {
    it('should change canPlay property to false', () => {
      const expectedState = { ...initialState, canPlay: false };

      window.expect(victim(
        undefined, {
          type: actions.CONTROLLERS_PLAY,
        },
      )).toEqual(expectedState);
    });
  });

  describe('when pause action is triggered', () => {
    it('should change canPause property to false', () => {
      const expectedState = { ...initialState, canPause: false };

      window.expect(victim(
        undefined, {
          type: actions.CONTROLLERS_PAUSE,
        },
      )).toEqual(expectedState);
    });
  });

  describe('when clear action is triggered', () => {
    it('should change canClear property to false', () => {
      const expectedState = { ...initialState, canClear: false };

      window.expect(victim(
        undefined, {
          type: actions.CONTROLLERS_CLEAR,
        },
      )).toEqual(expectedState);
    });
  });

  describe('when speed action is triggered', () => {
    it('should change speed property to the value provided', () => {
      const expectedState = { ...initialState, speed: 200 };

      window.expect(victim(
        undefined, {
          type: actions.CONTROLLERS_SPEED,
          payload: 200,
        },
      )).toEqual(expectedState);
    });
  });
});
