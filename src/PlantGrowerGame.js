import { SPECIES } from './data/species.js';

/**
 * A minimal plant growing game that utilises predefined plant species.
 */
export class PlantGrowerGame {
  constructor() {
    /** @type {Record<string, number>} */
    this.inventory = {};
  }

  /**
   * Plant a seed of the given species, reducing currency based on seed cost.
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
    this.inventory[speciesName] = (this.inventory[speciesName] || 0) + 1;
    return species;
  }
}

export default PlantGrowerGame;
