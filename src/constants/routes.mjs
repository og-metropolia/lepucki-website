/**
 * @fileoverview Tiedosto sisältää sovelluksen reittien vakioarvot.
 */

/**
 * @constant {Object} default - Jäädytetty objekti, joka sisältää sovelluksen reittien vakioarvot.
 * @property {string} front - Etusivun reitti.
 * @property {string} login - Kirjautumissivun reitti.
 * @property {string} home - Ilmoitustaulun reitti.
 * @property {string} sauna - Saunan reitti.
 * @property {string} laundry - Pyykkituvan reitti.
 * @property {string} contact - Yhteystietosivun reitti.
 */
export default Object.freeze({
  front: '//',
  login: '/kirjaudu',
  home: '/ilmoitustaulu',
  sauna: '/sauna',
  laundry: '/pyykkitupa',
  contact: '/yhteystiedot',
});
