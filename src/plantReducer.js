const TICK = 'TICK';
const WATER = 'WATER';

const initialState = {
  day: 0,
  water: 3,
  height: 0,
};

function plantReducer(state = initialState, action) {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        day: state.day + 1,
        water: Math.max(0, state.water - 1),
        height: state.height + 1,
      };
    case WATER:
      return {
        ...state,
        water: state.water + 2,
      };
    default:
      return state;
  }
}

module.exports = {
  TICK,
  WATER,
  initialState,
  plantReducer,
};
