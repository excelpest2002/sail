goog.provide('sail.model.Group');

goog.require('goog.graphics');



/**
 * Group
 *
 * @param {sail.model.Space} space Space.
 * 
 * @constructor
 */
sail.model.Group = function(space) {
    goog.graphics.ext.Group.call(this, space.graphics);
};
goog.inherits(sail.model.Group, goog.graphics.ext.Group);
