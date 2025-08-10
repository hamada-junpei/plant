const { TICK, WATER, plantReducer, initialState } = require('./plantReducer');

class PlantGame {
  constructor() {
    this.state = initialState;
    this.intervalId = null;
  }

  dispatch(action) {
    this.state = plantReducer(this.state, action);
  }

  act() {
    this.dispatch({ type: TICK });
  }

  water() {
    this.dispatch({ type: WATER });
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this.act(), 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

module.exports = PlantGame;
