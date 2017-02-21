import React from 'react';

import Row from './Row';

export default function Grid({ rows, toggleCell }) {
  return (
    <div className="gf-grid" >
      {
        rows.map((row, index) => <Row key={index} x={index} toggleCell={toggleCell} cells={row} />)
      }
    </div>
  );
}

Grid.propTypes = {
  rows: React.PropTypes.array.isRequired,
  toggleCell: React.PropTypes.func,
};

Grid.defaultProps = {
  toggleCell: () => {},
};
