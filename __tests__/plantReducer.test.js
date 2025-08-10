const { plantReducer, initialState, TICK, WATER } = require('../src/plantReducer');

describe('plantReducer', () => {
  test('TICK increases day, grows plant, and decreases water', () => {
    const state = plantReducer(initialState, { type: TICK });
    expect(state.day).toBe(1);
    expect(state.height).toBe(1);
    expect(state.water).toBe(2);
    expect(state.season).toBe('spring');
    expect(state.weather).toBe('sunny');
  });

  test('WATER adds water but does not change day or height', () => {
    const preState = { ...initialState, day: 5, height: 3, water: 1, season: 'spring', weather: 'sunny' };
    const state = plantReducer(preState, { type: WATER });
    expect(state.water).toBe(3);
    expect(state.day).toBe(5);
    expect(state.height).toBe(3);
    expect(state.season).toBe('spring');
    expect(state.weather).toBe('sunny');
  });

  test('season transitions and weather affects water', () => {
    let state = initialState;
    for (let i = 0; i < 30; i++) {
      state = plantReducer(state, { type: TICK });
    }
    expect(state.day).toBe(30);
    expect(state.season).toBe('summer');
    expect(state.weather).toBe('rainy');
    expect(state.height).toBe(31);
    expect(state.water).toBe(3);
  });
});
