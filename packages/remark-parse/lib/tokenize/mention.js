/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module remark:parse:tokenize:mention
 * @fileoverview Tokenise math.
 */

'use strict';

/* Dependencies. */
var whitespace = require('is-whitespace-character');
var locate = require('../locate/mention');

/* Expose. */
module.exports = mention;
mention.locator = locate;

/* Constants. */
var C_AT_SIGN = '@';

/**
 * Tokenise inline code.
 *
 * @property {Function} locator.
 * @param {function(string)} eat - Eater.
 * @param {string} value - Rest of content.
 * @param {boolean?} [silent] - Whether this is a dry run.
 * @return {Node?|boolean} - `math` node.
 */
function mention(eat, value, silent) {
  var m;
  if (m = value.match(/^@[a-zA-Z0-9_]+/)) {
    var value = m[0];
    var name = value.slice
    return eat(value)({
      type: 'mention',
      value: value,
      user: value.slice(1)
    });
  } else {
    return;
  }
}
