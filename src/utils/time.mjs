/**
 * @fileoverview Tiedosto sisältää hyödyllisiä funktioita.
 */

/**
 * @param {*} ms aika millisekunteina
 * @returns aika muutettuna päiviksi
 */
export function millisecond2Day(ms) {
  return ms * 1000 * 60 * 60 * 24;
}
