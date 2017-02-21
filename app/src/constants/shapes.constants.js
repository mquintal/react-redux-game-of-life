
export const GLIDER = {
  name: 'Glider',
  shape: [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
  size: 3,
};

export const BOAT = {
  name: 'Loaf',
  shape: [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  size: 3,
};

export const TUBE = {
  name: 'Tube',
  shape: [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  size: 3,
};

export default [GLIDER, BOAT, TUBE];
