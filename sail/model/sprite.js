goog.provide('sail.model.Sprite');

goog.require('sail.model.Space');



/**
 * Basic Sprite Object
 *
 * @param {string} src Path to image.
 *
 * @constructor
 */
sail.model.Sprite = function(src, space) {
    this.src = src;
    this.space = space;

    this.x = 0;
    this.y = 0;
};



/**
 * Space this sprite lives in.
 * 
 * @type {sail.model.Space}
 */
sail.model.Sprite.space;



/**
 * X position
 * 
 * @type {number}
 */
sail.model.Sprite.prototype.x;



/**
 * Y position
 * 
 * @type {number}
 */
sail.model.Sprite.prototype.y;