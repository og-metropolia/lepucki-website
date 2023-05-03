/**
 * @fileoverview Tiedosto sisältää API:n päätepisteiden vakioarvot.
 */

/**
 * @constant {Object} default - Jäädytetty objekti, joka sisältää API:n päätepisteiden vakioarvot.
 * @property {string} users - Käyttäjien päätepiste.
 * @property {string} announcements - Ilmoitusten päätepiste.
 * @property {string} laundry - Pyykkituvan päätepiste.
 * @property {string} sauna - Saunan päätepiste.
 * @property {string} contact - Yhteydenottolomakkeen päätepiste.
 */
export default Object.freeze({
  users: 'users',
  announcements: 'announcements',
  laundry: 'laundry',
  sauna: 'sauna',
  contact: 'contact_form',
});
