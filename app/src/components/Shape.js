import React from 'react';

import Grid from './Grid';

export default function Shape({ name, grid, click }) {
  const CLASS = 'gf-shape';

  return (
    <button className={CLASS} onClick={click} title={name} >
      <Grid rows={grid} />
    </button>
  );
}

Shape.propTypes = {
  name: React.PropTypes.string.isRequired,
  grid: React.PropTypes.array.isRequired,
  click: React.PropTypes.func.isRequired,
};
