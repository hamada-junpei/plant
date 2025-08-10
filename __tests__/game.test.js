const PlantGame = require('../src/game');

jest.useFakeTimers();

describe('PlantGame actions', () => {
  test('act dispatches TICK to update state', () => {
    const game = new PlantGame();
    game.act();
    expect(game.state.day).toBe(1);
    expect(game.state.season).toBe('spring');
    expect(game.state.weather).toBe('sunny');
  });

  test('consecutive acts toggle weather', () => {
    const game = new PlantGame();
    game.act();
    game.act();
    expect(game.state.weather).toBe('rainy');
  });

  test('start triggers periodic TICK actions', () => {
    const game = new PlantGame();
    game.start();
    jest.advanceTimersByTime(3000);
    game.stop();
    expect(game.state.day).toBe(3);
  });

  test('water dispatches WATER action', () => {
    const game = new PlantGame();
    game.water();
    expect(game.state.water).toBe(5); // initial 3 + 2
  });
});
