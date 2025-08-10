const TICK = 'TICK';
const WATER = 'WATER';

const SEASONS = ['spring', 'summer', 'autumn', 'winter'];

const initialState = {
  day: 0,
  water: 3,
  height: 0,
  season: 'spring',
  weather: 'sunny',
};

function plantReducer(state = initialState, action) {
  switch (action.type) {
    case TICK: {
      const day = state.day + 1;
      const season = SEASONS[Math.floor(day / 30) % SEASONS.length];
      const weather = day % 2 === 0 ? 'rainy' : 'sunny';
      const growth = season === 'summer' ? 2 : season === 'winter' ? 0 : 1;
      const waterDelta = weather === 'rainy' ? 1 : -1;
      return {
        ...state,
        day,
        season,
        weather,
        water: Math.max(0, state.water + waterDelta),
        height: state.height + growth,
      };
    }
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
  SEASONS,
  initialState,
  plantReducer,
};
