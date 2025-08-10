const PlantGrowerGame = require('../src/PlantGrowerGame');

describe('PlantGrowerGame basic mechanics', () => {
  test('plant grows and yields produce on harvest', () => {
    const game = new PlantGrowerGame();
    game.plant('sunflower');
    for (let i = 0; i < 10; i++) {
      game.advanceDay();
    }
    const harvested = game.harvest();
    expect(harvested).toEqual({ sunflower: 3 });
    expect(game.inventory.sunflower).toBe(3);
  });

  test('harvest returns empty when plants not mature', () => {
    const game = new PlantGrowerGame();
    game.plant('tulip');
    for (let i = 0; i < 6; i++) {
      game.advanceDay();
    }
    expect(game.harvest()).toEqual({});
    game.advanceDay();
    expect(game.harvest()).toEqual({ tulip: 2 });
  });

  test('plant throws on invalid species', () => {
    const game = new PlantGrowerGame();
    expect(() => game.plant('unknown')).toThrow('Unknown species: unknown');
  });
});
