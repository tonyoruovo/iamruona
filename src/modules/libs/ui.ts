/**
 * Generates evenly spaced values around a midpoint using linear interpolation.
 *
 * @param {number} mid - The midpoint of the range.
 * @param {number} [count=3] - The number of values to generate on each side of the mid.
 * @returns {{lessThanMid: number[], greaterThanMid: number[]}} An object with the generated values.
 */
export function generateInterpolatedValues(mid: number, count: number = 3) {
  const lessThanMid = [];
  const greaterThanMid = [];
  const segments = count + 1;

  // Defines a symmetrical range from 0 to mid*2
  const end = mid * 2;

  for (let i = 1; i <= count; i++) {
    const t = i / segments; // Interpolation factor (e.g., 0.25, 0.5, 0.75)

    // Calculate value from 0 to mid
    const lowerValue = 0 + t * (mid - 0);
    // Calculate value from mid to end
    const upperValue = mid + t * (end - mid);

    // Round to 4 decimal places and push to arrays
    lessThanMid.push(Math.round(lowerValue * 10000) / 10000);
    greaterThanMid.push(Math.round(upperValue * 10000) / 10000);
  }

  return {
    lessThanMid,
    greaterThanMid
  };
}