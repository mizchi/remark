/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module remark:parse:tokenize:emoji
 * @fileoverview Tokenise emoji.
 */

'use strict';

/* Dependencies. */
var whitespace = require('is-whitespace-character');
var locate = require('../locate/emoji');

/* Expose. */
module.exports = emoji;
emoji.locator = locate;

/* Constants. */
var EMOJI_REGEX = /^\:[a-zA-Z0-9_\-]+\:/;

/**
 * Tokenise inline code.
 *
 * @property {Function} locator.
 * @param {function(string)} eat - Eater.
 * @param {string} value - Rest of content.
 * @param {boolean?} [silent] - Whether this is a dry run.
 * @return {Node?|boolean} - `emoji` node.
 */
function emoji(eat, value, silent) {
  var m;
  var value;
  if (m = value.match(EMOJI_REGEX)) {
    value = m[0];
    return eat(value)({
      type: 'emoji',
      value: value,
      emoji: value.slice(1, value.length - 1)
    });
  } else {
    return;
  }
}
