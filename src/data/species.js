/**
 * @typedef {Object} Species
 * @property {number} seedCost Cost to purchase one seed.
 * @property {number} growthDays Number of in-game days required to mature.
 * @property {number} yield Number of produce yielded at harvest.
 */

/** @type {Record<string, Species>} */
export const SPECIES = {
  /**
   * Sunflower is a tall annual plant known for its large head that tracks the sun.
   */
  sunflower: {
    seedCost: 5,
    growthDays: 10,
    yield: 3,
  },
  /**
   * Tulip is a spring-blooming perennial that produces bright, cup-shaped flowers.
   */
  tulip: {
    seedCost: 3,
    growthDays: 7,
    yield: 2,
  },
};

export default SPECIES;
