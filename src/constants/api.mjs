/**
 * @fileoverview Tiedosto sisältää API:n endpointit ja perus-URL:n.
 */

/**
 * @constant {Object} ENDPOINTS - Jäädytetty objekti, joka sisältää API:n eri osien endpointit.
 * @property {string} users - Käyttäjien endpoint.
 * @property {string} announcements - Ilmoitusten endpoint.
 * @property {string} laundry - Pyykkituvan endpoint.
 * @property {string} sauna - Saunan endpoint.
 * @property {string} contact - Yhteydenottolomakkeen endpoint.
 */
export const ENDPOINTS = Object.freeze({
  users: 'users',
  announcements: 'announcements',
  laundry: 'laundry',
  sauna: 'sauna',
  contact: 'contact_form',
});

/**
 * @constant {string} API_PATH - API:n version polku.
 */

export const API_PATH = 'api/v0';

/**
 * @constant {string} BASE_URL - API:n perus-URL, joka sisältää palvelimen osoitteen ja API-polun.
 */

export const BASE_URL = `http://localhost:3000/${API_PATH}`;
