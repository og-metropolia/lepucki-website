/**
 * Tarkistaa, onko annettu arvo kelvollinen kokonaisluku INT.
 *
 * @param {*} value - Tarkistettava arvo
 * @returns {boolean} Palauttaa true, jos arvo on kelvollinen kokonaisluku, muuten false
 */
export function isValidInt(value) {
  return value > -2147483648 && value < 2147483647;
}

/**
 * Tarkistaa, onko annettu arvo kelvollinen VARCHAR.
 *
 * @param {*} value - Tarkistettava arvo
 * @returns {boolean} Palauttaa true, jos arvo on kelvollinen VARCHAR, muuten false
 */
export function isValidVarchar(value) {
  return value.length >= 0 && value.length < 65535;
}

/**
 * Tarkistaa, onko annettu arvo kelvollinen TEXT.
 *
 * @param {*} value - Tarkistettava arvo
 * @returns {boolean} Palauttaa true, jos arvo on kelvollinen TEXT, muuten false
 */
export function isValidText(value) {
  return value.length >= 0 && value.length < 65535;
}

/**
 * Tarkistaa, onko annettu arvo kelvollinen aikaleima (TIMESTAMP).
 *
 * @param {*} value - Tarkistettava arvo
 * @returns {boolean} Palauttaa true, jos arvo on kelvollinen aikaleima, muuten false
 */
export function isValidTimestamp(value) {
  const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return timestampRegex.test(value);
}
