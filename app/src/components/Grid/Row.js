import React from 'react';

import Cell from './Cell';

export default function Row({ cells, x, toggleCell }) {
  return (
    <div className="gf-grid-row" >
      {
        cells.map((cell, index) => <Cell key={index} y={index} x={x} toggleCell={toggleCell} state={cell} />)
      }
    </div>
  );
}

Row.propTypes = {
  cells: React.PropTypes.array.isRequired,
};
