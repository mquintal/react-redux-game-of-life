import React from 'react';

export default function Cell({ state, x, y, toggleCell }) {
  const className = state === 1 ? ' active' : '';

  function handlerToggle() {
    toggleCell(x, y);
  }

  return <div className={`gf-grid-cell${className}`} onClick={handlerToggle} />;
}

Cell.propTypes = {
  state: React.PropTypes.number.isRequired,
};
