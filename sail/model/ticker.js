goog.provide('sail.model.Ticker');

goog.require('goog.Timer');
goog.require('goog.events');



/**
 * Ticker
 *
 * @param {number} interval Milliseconds between ticks
 * @param {Object} onTick Function to call every tick
 * 
 * @constructor
 */
sail.model.Ticker = function(interval, onTick) {
    this.interval = interval;
    this.onTick = onTick;

    this.timer_ = new goog.Timer(interval);
    goog.events.listen(this.timer_, goog.Timer.TICK, this.onTick, false, this);
};



/**
 * Google Closure Timer
 * 
 * @type {goog.Timer}
 * 
 * @private
 */
sail.model.Ticker.prototype.timer_;



/**
 * Start ticker
 */
sail.model.Ticker.prototype.start = function() {
  this.timer_.start();  
};



/**
 * Stop ticker
 */
sail.model.Ticker.prototype.stop = function() {
  this.timer_.stop();  
};