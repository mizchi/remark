/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module remark:parse:locate:mention
 * @fileoverview Locate mention.
 */

'use strict';

/* Expose. */
module.exports = locate;

/**
 * Find a possible token.
 *
 * @param {string} value - Value to search.
 * @param {number} fromIndex - Index to start searching at.
 * @return {number} - Location.
 */
function locate(value, fromIndex) {
  return value.indexOf('@', fromIndex);
}
