import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';

import * as controlllersActions from '../actions/controllers.actions';

function Controllers({ actions, data }) {
  const CONSTAINER_CLASS = 'gf-controllers';
  const BUTTON_CLASS = 'gf-btn';
  const RANGE_CLASS = 'gf-input-range';

  function handleSpeed(value) {
    actions.speed(value);
  }

  return (
    <div className={CONSTAINER_CLASS} >
      <button className={BUTTON_CLASS} onClick={actions.play} disabled={!data.canPlay} >
        Start
      </button>
      <button className={BUTTON_CLASS} onClick={actions.pause} disabled={!data.canPause} >
        Pause
      </button>
      <button className={BUTTON_CLASS} onClick={actions.clear} disabled={!data.canClear} >
        Clear
      </button>
      <div className={RANGE_CLASS} >
        <InputRange
          maxValue={750}
          step={50}
          minValue={250}
          value={data.speed}
          onChange={handleSpeed}
        />
      </div>
    </div>
  );
}

Controllers.propTypes = {
  actions: React.PropTypes.shape({
    play: React.PropTypes.func.isRequired,
    pause: React.PropTypes.func.isRequired,
    clear: React.PropTypes.func.isRequired,
  }).isRequired,
  data: React.PropTypes.shape({
    canPlay: React.PropTypes.bool.isRequired,
    canPause: React.PropTypes.bool.isRequired,
    canClear: React.PropTypes.bool.isRequired,
    speed: React.PropTypes.number.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(controlllersActions, dispatch),
  };
}

function mapStateToProps(state) {
  return { data: state.controllers };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);
