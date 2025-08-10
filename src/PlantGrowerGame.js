const { SPECIES } = require('./data/species.js');

/**
 * A minimal plant growing game that utilises predefined plant species.
 */
class PlantGrowerGame {
  constructor() {
    /**
     * Stores harvested produce keyed by species name.
     * @type {Record<string, number>}
     */
    this.inventory = {};

    /**
     * Currently planted crops with their growth progress.
     * Each entry has the shape { speciesName, species, days } where `days`
     * represents how many in-game days the plant has grown for.
     * @type {{speciesName: string, species: Species, days: number}[]}
     */
    this.plants = [];

    /** Current in-game day counter. */
    this.day = 0;
  }

  /**
   * Plant a seed of the given species.
   *
   * @param {string} speciesName - Key of the species to plant.
   * @returns {Species} configuration for the planted species.
   * @throws {Error} if the species name is invalid.
   */
  plant(speciesName) {
    const species = SPECIES[speciesName];
    if (!species) {
      throw new Error(`Unknown species: ${speciesName}`);
    }

    // Track the newly planted crop. Harvesting will later move yield into the
    // inventory once the plant has fully grown.
    this.plants.push({ speciesName, species, days: 0 });
    return species;
  }

  /**
   * Advance the simulation by a single day, progressing growth for all crops.
   */
  advanceDay() {
    this.day += 1;
    this.plants.forEach(p => {
      p.days += 1;
    });
  }

  /**
   * Harvest any crops that have completed their growth cycle. Harvested yield
   * is added to the inventory and returned to the caller.
   *
   * @returns {Record<string, number>} mapping of species name to harvested
   *   quantity for this call.
   */
  harvest() {
    const harvested = {};
    this.plants = this.plants.filter(p => {
      if (p.days >= p.species.growthDays) {
        const qty = p.species.yield;
        this.inventory[p.speciesName] =
          (this.inventory[p.speciesName] || 0) + qty;
        harvested[p.speciesName] = (harvested[p.speciesName] || 0) + qty;
        return false; // remove harvested plant from active list
      }
      return true;
    });
    return harvested;
  }
}

module.exports = PlantGrowerGame;
module.exports.PlantGrowerGame = PlantGrowerGame;
module.exports.default = PlantGrowerGame;
