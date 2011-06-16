goog.provide('sail.model.Space');

goog.require('goog.graphics');



/**
 * Space
 *
 * @param {number} width Width.
 * @param {number} height Height.
 * 
 * @constructor
 */
sail.model.Space = function(width, height) {
    this.width = width;
    this.height = height;

    this.graphics = goog.graphics.createGraphics(this.width, this.height);
};



/**
 * graphics
 * 
 * @type {goog.graphics.AbstractGraphics}
 */
sail.model.Space.graphics;

