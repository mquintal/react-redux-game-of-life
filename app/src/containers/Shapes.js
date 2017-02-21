import React from 'react';
import { connect } from 'react-redux';

import SHAPES from '../constants/shapes.constants';
import * as gridActions from '../actions/grid.actions';
import Shape from '../components/Shape';

function Shapes({ insertShape }) {
  const shapes = SHAPES.map((shape, index) => {
    const key = index + shape.name;
    /* eslint max-len: ["error", 120] */
    return (<Shape key={key} click={() => { insertShape(index); }} name={shape.name} grid={shape.shape} />);
  });

  return (
    <div className={'gf-shapes'} >
      {shapes}
    </div>
  );
}

Shapes.propTypes = {
  insertShape: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    insertShape: shapeIndex => dispatch(gridActions.insertShape(shapeIndex)),
  };
}

export default connect(null, mapDispatchToProps)(Shapes);
